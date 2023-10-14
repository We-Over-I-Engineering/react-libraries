## WOI CheckBox

WOI CheckBox component accepts the following props:


| Props                   | Type    |
| ----------------------- | ------- |
| size                    | Number  |
| borderRadius            | Number  |
| borderWidth             | Number  |
| activeBorderColor       | String  |
| inActiveBorderColor     | String  |
| activeBackgroundColor   | String  |
| inActiveBackgroundColor | String  |
| icon                    | String  |
| iconSize                | Number  |
| OnClick                 | Boolean |


### **Checkbox Usage**

```js
import {WOICheckBox} from "woi-react-storybook/components";

const WOICheckBoxWidget = () => {
  <WOICheckBox
    size={32}
    borderRadius={8}
    borderWidth={3}
    activeBorderColor="#33B8FF"
    inActiveBorderColor ="#D3D3D3"
    activeBackgroundColor="#FFFFFF"
    inActiveBackgroundColor= "#FFFFFF"
    icon= "https://cdn-icons-png.flaticon.com/512/3106/3106690.png"
    iconSize={36}
    isChecked={false}
  />;
};
```