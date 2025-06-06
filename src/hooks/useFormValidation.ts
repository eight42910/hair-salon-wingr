import { useState, useEffect, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FormField {
  value: string;
  error: string | null;
  touched: boolean;
}

interface FormValidationConfig {
  [key: string]: ValidationRule;
}

export const useFormValidation = (config: FormValidationConfig) => {
  const [fields, setFields] = useState<{ [key: string]: FormField }>(() => {
    const initialFields: { [key: string]: FormField } = {};
    Object.keys(config).forEach((key) => {
      initialFields[key] = { value: '', error: null, touched: false };
    });
    return initialFields;
  });

  const [isValid, setIsValid] = useState(false);

  const validateField = useCallback(
    (name: string, value: string): string | null => {
      const rules = config[name];
      if (!rules) return null;

      if (rules.required && !value.trim()) {
        return 'この項目は必須です';
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `${rules.minLength}文字以上で入力してください`;
      }

      if (rules.maxLength && value.length > rules.maxLength) {
        return `${rules.maxLength}文字以下で入力してください`;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return '入力形式が正しくありません';
      }

      if (rules.custom) {
        return rules.custom(value);
      }

      return null;
    },
    [config]
  );

  const updateField = useCallback(
    (name: string, value: string) => {
      setFields((prev) => ({
        ...prev,
        [name]: {
          value,
          error: validateField(name, value),
          touched: true,
        },
      }));
    },
    [validateField]
  );

  const validateAll = useCallback(() => {
    const newFields = { ...fields };
    let allValid = true;

    Object.keys(config).forEach((name) => {
      const error = validateField(name, newFields[name].value);
      newFields[name] = {
        ...newFields[name],
        error,
        touched: true,
      };
      if (error) allValid = false;
    });

    setFields(newFields);
    return allValid;
  }, [fields, config, validateField]);

  useEffect(() => {
    const requiredFields = Object.keys(config).filter(
      (key) => config[key].required
    );
    const allRequiredFilled = requiredFields.every(
      (key) => fields[key].value.trim() !== '' && !fields[key].error
    );
    setIsValid(allRequiredFilled);
  }, [fields, config]);

  return {
    fields,
    isValid,
    updateField,
    validateAll,
    setFieldValue: (name: string, value: string) => {
      setFields((prev) => ({
        ...prev,
        [name]: { ...prev[name], value },
      }));
    },
  };
};
