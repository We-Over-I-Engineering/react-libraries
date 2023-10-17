// Import types for each component
import type { WOICheckBoxProps } from './dist/components/WOICheckBox/index.js';
import type { IconButtonProps } from './dist/components/WOIIconButton/index.js';
import type { ParallelogramButtonProps } from './dist/components/WOIParallelogramButton/index.js';
import type { WOIRadioButtonProps } from './dist/components/WOIRadioButton/index.js';
import type { WOISwitchButtonProps } from './dist/components/WOISwitchButton/index.js';
import type { ButtonProps } from './dist/components/WOITextButton/index.js';
import type { TextFieldProps } from './dist/components/WOITextField/index.js';


// Declare the components with their respective prop types
declare const WOIRadioButton: React.FC<WOIRadioButtonProps>;
declare const WOISwitchButton: React.FC<WOISwitchButtonProps>;
declare const WOITextField: React.FC<TextFieldProps>;
declare const WOIIconButton: React.FC<IconButtonProps>;
declare const WOIParallelogramButton: React.FC<ParallelogramButtonProps>;
declare const WOITextButton: React.FC<ButtonProps>;
declare const WOICheckBox: React.FC<WOICheckBoxProps>;

// Export the components
export { WOIRadioButton, WOISwitchButton, WOICheckBox, WOITextField, WOIIconButton, WOIParallelogramButton, WOITextButton };
