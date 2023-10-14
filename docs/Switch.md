## WOI Switch Button

WOI Switch Button component accepts the following props:

| Props               | Type     |
| ------------------- | -------- |
| size                | Number   |
| borderWidth         | Number   |
| activeBorderColor   | String   |
| inActiveBorderColor | String   |
| activeColor         | String   |
| inActiveColor       | String   |
| isSelected          | Boolean  |
| OnClick             | Function |


### **Switch Button Usage**

```js
import {WOISwitchButton} from "woi-react-storybook/components";

const WOISwitchButtonWidget = () => {
  <WOISwitchButton
    trackWidth={60}
    trackHeight={24}
    padding={4}
    trackBorderRadius={50}
    trackBorderColor="#33B8FF"
    trackBorderWidth={2}
    trackActiveColor="#33B8FF"
    trackInActiveColor="#D3D3D3"
    thumbSize={24}
    thumbBorderRadius={50}
    thumbBorderColor="#FFFFFF"
    thumbBorderWidth={2}
    thumbActiveColor="#FFFFFF"
    thumbInActiveColor="#D3D3D3"
    isActive={false}
    thumbActiveIcon="https://cdn-icons-png.flaticon.com/512/1400/1400310.png"
    thumbInActiveIcon="https://cdn-icons-png.flaticon.com/512/4445/4445942.png"
    thumbIconSize={20}
  />;
};
```