import styled from 'styled-components';

// props that the component will receive

export interface WOICheckBoxProps {
    toggleBorder: boolean;
    icon: string;
    iconHeight: string;
    iconWidth: string;
    text: string[];
    containerBackgroundColor: string;
    containerBorderRadius: string;
    containerBorderStyle: string;
    containerBorderColor: string;
    stepNameFontSize: string;
    stepFontFamily: string;
    stepNameFontweight: string;
    stepNameColor: string;
    numberFontSize: string;
    numberColor: string;
    numberFontWeight: string;
    numberFontFamily: string;
    numberContainerWidth: string;
    numberContainerHeight: string;
    numberContainerPadding: string;
    numberBorderStyle: string;
    numberBorderColor: string;
    numberBorderRadius: string;
    currentStep: number;
    activeColor: string;

}

const WOISteppers = ({ numberContainerPadding, stepFontFamily, numberFontFamily, toggleBorder, icon, text, containerBackgroundColor, numberBorderRadius, containerBorderRadius, containerBorderStyle, containerBorderColor, stepNameFontSize, numberFontSize, numberColor, stepNameColor, iconHeight, iconWidth, stepNameFontweight, numberFontWeight, numberContainerWidth, numberContainerHeight, numberBorderStyle, numberBorderColor, activeColor, currentStep }: WOICheckBoxProps) => {

    // Styling the main container widget

    const SteppersContainerWidget = styled.div`
        height: 40px;
        border: ${toggleBorder ? containerBorderStyle : 'none'};
        border-color: ${containerBorderColor};
        border-radius:${containerBorderRadius};
        background-color: ${containerBackgroundColor};
        padding: 4px 18px 4px 12px;
        display: inline-flex; 
        align-items: center;
        `;

    // Styling the number widget

    const StepperNumberWidget = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width:${numberContainerWidth} ;
        height: ${numberContainerHeight};
        border: ${numberBorderStyle};
        border-radius:${numberBorderRadius};
        padding: ${numberContainerPadding};
        box-sizing: border-box;
        margin: 0px 10px; 
    `;

    return (
        <SteppersContainerWidget>
            {/* Use map to iterate over the length of the array and adjust the lenght of the stepper*/}
            {text.map((_, index) => (
                <div style={{
                    display: 'flex', alignItems: 'center', columnGap: '10px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* if currentStep is equal to index + 1 (index starts from zero) highlight the border of number by changing color to activeColor */}
                        <StepperNumberWidget key={index + 1} style={{ color: currentStep === (index + 1) ? activeColor : numberBorderColor }}>
                            <p
                                style={{
                                    fontSize: numberFontSize,
                                    fontFamily: numberFontFamily,
                                    color: currentStep === index + 1 ? activeColor : numberColor,
                                    fontWeight: numberFontWeight,
                                }}>
                                {index + 1}
                            </p>
                        </StepperNumberWidget>
                        <p
                            style={{
                                fontSize: stepNameFontSize,
                                fontFamily: stepFontFamily,
                                color: currentStep === index + 1 ? activeColor : stepNameColor,
                                fontWeight: stepNameFontweight
                            }} >
                            {text[index]}
                        </p>
                    </div>
                    {(icon && index != text.length - 1) && <img src={icon} alt='icon' height={iconHeight} width={iconWidth} />}
                </div>
            ))}
        </SteppersContainerWidget >
    );
};

export default WOISteppers;
