import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

export interface TextInputWithIconInterface
  extends Omit<TextInputProps, 'styles'> {
  icon: ReactNode;
  /**
   * Indicates that input has error
   */
  error?: boolean;

  /**
   * Error text
   * @default ''
   */
  errorText?: string;
}
