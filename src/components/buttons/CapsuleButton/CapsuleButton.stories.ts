
import CapsuleButton from './CapsuleButton';

export default {
    title: 'CapsuleButton',
    component: CapsuleButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        size: 'medium',
        text: 'Submit',
        text_color: '#FFFFFF',
        bg_color: '#E6427A',
        width: 'auto',
        height: 'auto',
        border_radius: '',
        border: 'none',
        border_color: '#E6427A',
        font_size: '',
        font_weight: '',
        font_family: '',
        padding: '',
        margin: '',
        hover_text_color: '#FFFFFF',
        hover_border: 'none',
        hover_border_color: '#E6427A',
        hover_bg_color: '#E6427A'
    },
};

export const Primary = {
    args: {
        size: 'medium',
        text: 'Submit',
        text_color: '#FFFFFF',
        bg_color: 'blue',
    },
};

export const Secondary = {
    args: {
        size: 'medium',
        text: 'Submit',
    },
};

export const Success = {
    args: {
        size: 'medium',
        text: 'Submit',
        text_color: '#FFFFFF',
        bg_color: 'green',
    },
};

  export const Large = {
    args: {
      size: 'large',
      text: 'Large Button',
      text_color: '#FFFFFF',
        bg_color: '#E6427A',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
        text: 'Small Button',
        text_color: '#FFFFFF',
        bg_color: '#E6427A',
    },
  };
  