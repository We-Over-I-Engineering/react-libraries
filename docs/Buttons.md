# We Over I Button Components

We Over I button components are reusable React components for creating interactive buttons in your web application.

## Components

- [We Over I Button Components](#we-over-i-button-components)
  - [Components](#components)
  - [WOI Storybook](https://woi-react-storybook.netlify.app/)
  - [**Getting Started**](#getting-started)
    - [WOI Text Button](#woi-text-button)
    - [**Usage**](#usage)
    - [WOI Icon Button](#woi-icon-button)
    - [**Icon Button Usage**](#icon-button-usage)
    - [WOI Parallelogram Button](#woi-parallelogram-button)
    - [**Parallelogram Button Usage**](#parallelogram-button-usage)


## WOI Storybook 

[WOI Storybook](https://woi-react-storybook.netlify.app/) is a tool for UI development, using components from the WOI library. It makes development faster and easier by isolating components. This allows you to work on any one of our component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.
## **Getting Started**

```js
import {WOITextButton, WOIIconButton, WOIParallelogramButton} from "woi-react-storybook/buttons"
```

### WOI Text Button

![WOI Text Button](https://github.com/We-Over-I-Engineering/react-libraries/blob/usman/update-README.md/src/assets/buttons/WOIButton.png)

WOI Text Button component accepts the following props:

| Props                  | Type    |
| ---------------------- | ------- |
| text                   | String  |
| textColor              | String  |
| hoverTextColor         | String  |
| fontSize               | Number  |
| fontWeight             | Number  |
| width                  | Number  |
| height                 | Number  |
| borderRadius           | Number  |
| textTransform          | String  |
| backgroundColor        | String  |
| hoverBackgroundColor   | String  |
| borderColor            | String  |
| borderThickness        | String  |
| loading                | Boolean |
| loaderColor            | String  |
| openLink               | String  |
| openLinkInNewTab       | Boolean |
| prefixIcon             | String  |
| suffixIcon             | String  |
| gradientDirection      | Boolean |
| gradientColors         | Array   |
| hoverGradientDirection | Boolean |
| hoverGradientColors    | Array   |
| isDisabled             | Boolean |

### **Usage**
```js
import {WOITextButton} from "woi-react-storybook/buttons";

const textButtonWidget = () => {
    <WOITextButton
        text="WOI Text Button"
        textColor="#ffffff"
        hoverTextColor="#000000"
        textTransform="capitalize"
        backgroundColor="#e64178"
        hoverBackgroundColor="#ffffff"
        borderColor="#e64178"
        borderRadius={20}
        borderThickness="3px"
        fontSize={16}
        fontWeight={400}
        width={250}
        height={50}
        gradientColors={['purple','yellow']}
        gradientDirection="left"
        hoverGradientColors={['yellow','purple']}
        hoverGradientDirection="left"
        loading={false}
        loaderColor="#6d5252"
        openLink="https://www.wikipedia.org/"
        openLinkInNewTab={true}
        prefixIcon="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        suffixIcon="https://cdn-icons-png.flaticon.com/512/32/32213.png"
/>
};
```
### WOI Icon Button

![WOI Icon Button](https://github.com/We-Over-I-Engineering/react-libraries/blob/usman/update-README.md/src/assets/buttons/WOIIconButton.png)

WOI Icon Button component accepts the following props:
       
| Props                | Type    |
| -------------------- | ------- |
| size                 | String  |
| borderRadius         | Number  |
| backgroundColor      | String  |
| hoverBackgroundColor | String  |
| borderColor          | String  |
| borderThickness      | Number  |
| loading              | Boolean |
| loaderColor          | String  |
| openLink             | String  |
| openLinkInNewTab     | Boolean |
| icon                 | String  |
| iconColor            | String  |
| iconsSize            | Number  |
| isDisabled           | Boolean |

### **Icon Button Usage**
```js
import {WOIIconButton} from "woi-react-storybook/buttons";

const textButtonWidget = () => {
    <WOITextButton
        size={50}
        backgroundColor="#FFFFFF"
        borderColor="#007DFF"
        borderRadius={100}
        borderThickness="3px"
        hoverBackgroundColor="#007DFF"
        icon="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png"
        iconColor="#FFFFFF"
        iconsSize={32}
        loaderColor="#6D5252"
        openLink="https://www.wikipedia.org/"
        openLinkInNewTab
    />
};
```
### WOI Parallelogram Button

![WOI Paralellogram Button](https://github.com/We-Over-I-Engineering/react-libraries/blob/usman/update-README.md/src/assets/buttons/WOIParalellogramButton.png)

WOI Parallelogram Button component accepts the following props:

| Props                  | Type    |
| ---------------------- | ------- |
| text                   | String  |
| textColor              | String  |
| hoverTextColor         | String  |
| fontSize               | Number  |
| fontWeight             | Number  |
| width                  | Number  |
| height                 | Number  |
| textTransform          | String  |
| backgroundColor        | String  |
| hoverBackgroundColor   | String  |
| borderColor            | String  |
| borderThickness        | Number  |
| loading                | Boolean |
| loaderColor            | String  |
| openLink               | String  |
| openLinkInNewTab       | Boolean |
| prefixIcon             | String  |
| suffixIcon             | String  |
| gradientDirection      | Boolean |
| gradientColors         | Array   |
| hoverGradientDirection | Boolean |
| hoverGradientColors    | Array   |
| isDisabled             | Boolean |
| skewType               | String  |
| skew                   | Number  |

### **Parallelogram Button Usage**
```js
import {WOIParallelogramButton} from "woi-react-storybook/buttons";

const textButtonWidget = () => {
    <WOIParallelogramButton
        text="WOI Text Button"
        textColor="#ffffff"
        hoverTextColor="#000000"
        textTransform="capitalize"
        backgroundColor="#e64178"
        hoverBackgroundColor="#ffffff"
        borderColor="#e64178"
        borderRadius={20}
        borderThickness="3px"
        fontSize={16}
        fontWeight={400}
        width={250}
        height={50}
        skew={20}
        skewType="left"
        gradientColors={['purple','yellow']}
        gradientDirection="left"
        hoverGradientColors={['yellow','purple']}
        hoverGradientDirection="left"
        loading={false}
        loaderColor="#6d5252"
        openLink="https://www.wikipedia.org/"
        openLinkInNewTab={true}
        prefixIcon="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        suffixIcon="https://cdn-icons-png.flaticon.com/512/32/32213.png"
    />
};
```
