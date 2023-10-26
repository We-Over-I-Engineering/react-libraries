import { useState } from 'react';
import styled, { keyframes } from "styled-components";
import WOITextButton from '../WOITextButton';

interface MenuItemProps {
    name: string
    link: string
    drop?: DropItemProps[]
}

interface DropItemProps {
    name: string
    link: string
}

export interface TopNavbarProps {

    headerIcon?: string
    headerLink?: string
    headerText?: string
    iconPosition?: string // left, right, center
    iconSize?: number
    menuItems?: MenuItemProps[]
    textColor?: string
    hoverTextColor?: string
    fontSize?: number
    fontWeight?: number
    fontFamily?: string
    borderRadius?: number
    hoverUnderline?: boolean
    backgroundColor?: string
    borderColor?: string
    borderThickness?: string
    openLinkInNewTab?: boolean
    headerFunction?: () => void
    clickFunction?: () => void
}

const dropData = [
    {
        name: "Product",
        link: "/product"
    },
    {
        name: "Solutions",
        link: "/solutions",
        drop: [
            {
                name: "Drop 1",
                link: "/drop1"
            },
            {
                name: "Drop 2",
                link: "/drop2"
            },
            {
                name: "Drop 3",
                link: "/drop3"
            }
        ],
    },
    {
        name: "Services",
        link: "/services",
        drop: [
            {
                name: "Drop 1",
                link: "/drop1"
            },
            {
                name: "Drop 2",
                link: "/drop2"
            },
            {
                name: "Drop 3",
                link: "/drop3"
            }
        ],
    },
    {
        name: "Pricing",
        link: "/pricing"
    }
]

const WOITopNavbar = (props: TopNavbarProps) => {

    const { fontFamily, fontSize, fontWeight, borderRadius = 0, backgroundColor = 'white', borderColor = 'transparent', borderThickness = '0px', headerIcon, headerLink = '/', openLinkInNewTab, headerFunction, headerText = "magnifico", iconPosition = 'left', iconSize = 80, menuItems = dropData, textColor = 'black', hoverTextColor = '#2563EB', hoverUnderline = true } = props

    const [onHover, setHoverState] = useState(false);
    const [menuHover, setMenuHover] = useState(0);
    const [menuActive, setMenuActive] = useState(0);

    const [dropOpen, setDropOpen] = useState(-1);
    const [dropHover, setDropHover] = useState(-1);

    const pi_icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.8596 8.35092H7.64904V4.14039C7.64904 3.95427 7.57511 3.77578 7.4435 3.64418C7.3119 3.51257 7.13341 3.43864 6.94729 3.43864C5.83694 3.43864 4.75152 3.76789 3.8283 4.38477C2.90508 5.00165 2.18551 5.87844 1.7606 6.90427C1.33568 7.9301 1.22451 9.0589 1.44113 10.1479C1.65775 11.2369 2.19243 12.2373 2.97757 13.0224C3.7627 13.8075 4.76303 14.3422 5.85205 14.5588C6.94106 14.7755 8.06986 14.6643 9.09569 14.2394C10.1215 13.8144 10.9983 13.0949 11.6152 12.1717C12.2321 11.2484 12.5613 10.163 12.5613 9.05267C12.5613 8.86655 12.4874 8.68806 12.3558 8.55646C12.2242 8.42485 12.0457 8.35092 11.8596 8.35092Z" fill="#9CA3AF" />
        <path d="M9.05255 1.33337C8.86644 1.33337 8.68794 1.40731 8.55634 1.53891C8.42473 1.67052 8.3508 1.84901 8.3508 2.03513V6.94741C8.3508 7.13353 8.42473 7.31202 8.55634 7.44362C8.68794 7.57523 8.86644 7.64916 9.05255 7.64916H13.9648C14.1509 7.64916 14.3294 7.57523 14.461 7.44362C14.5927 7.31202 14.6666 7.13353 14.6666 6.94741C14.6649 5.45899 14.0729 4.03201 13.0204 2.97953C11.968 1.92706 10.541 1.33505 9.05255 1.33337Z" fill="#9CA3AF" />
    </svg>

    // Created styled button widget
    const TopNavbarWidget = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 1440px;
        height: 96px;
        padding: 24px;
        justify-content: space-between;
        align-items: center;
        background-color: ${backgroundColor};
        border-radius: ${borderRadius}px;
        border-color: ${borderColor};
        border-style: solid;
        border-width: ${borderThickness};
        font-family: ${fontFamily ? fontFamily : 'Nunito Sans'};
        font-size: ${fontSize ? fontSize + 'px' : '16px'};
        font-style: normal;
        font-weight: ${fontWeight ? fontWeight : '400'};
        line-height: normal;
        color: ${textColor};
    `;

    const TopNavbarWidgetLeft = styled.div`
        color: var(--blue-gray-900, #0F172A);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%;
    `;

    const TopNavbarWidgetCenter = styled.div`
        display: flex;
        flex-direction: row;
        gap: 24px;
    `;

    const TopNavbarWidgetRight = styled.div`
        display: flex;
        flex-direction: row;
        gap: 24px;
    `;

    const MenuItem = styled.div`
        display: flex;
        padding: 12px 8px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        cursor: pointer;
        position: relative;
    `;

    // style={{ borderBottom: `${(hoverUnderline && menuHover == index) ? `3px solid ${hoverTextColor}` : '3px solid transparent'}`, 
    // color: `${(menuActive == index) ? hoverTextColor : textColor}` }}

    const MenuText = styled.h2<{ index: any }>`
        padding-bottom: 3px;
        color: ${(props) => (props.index == menuActive) ? hoverTextColor : textColor};
        border-bottom: ${(props) => (hoverUnderline && props.index == menuHover) ? `3px solid ${hoverTextColor}` : '3px solid transparent'};
        `;

    const DropdownContainer = styled.div`
        position: absolute;
        background: var(--white, #FFF);
        border: 1px solid var(--blue-gray-200, #E5E7EB);
        border-radius: 8px;
        top: 120px;
        display: flex;
        width: 224px;
        padding: var(--1, 4px) var(--0, 0px);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--0, 0px);
        font-family: ${fontFamily ? fontFamily : 'Nunito Sans'};
    `;

    const DropItem = styled.div`
        display: flex;
        padding: var(--2, 8px) var(--4, 16px);
        align-items: center;
        gap: var(--15, 6px);
        align-self: stretch;
        cursor: pointer;

        color: var(--gray-500, var(--gray-500, #6B7280));

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    `;

    const Dropdown = () => {
        return (
            <>
                {menuItems?.[menuHover]?.drop &&
                    <DropdownContainer>
                        {
                            menuItems?.[menuHover]?.drop?.map((item, index) => {
                                return (
                                    <DropItem key={index} onClick={() => window.open(item?.link, openLinkInNewTab ? '_blank' : '_self')} onMouseEnter={() => setDropHover(index)} style={{ color: `${(dropHover == index) ? hoverTextColor : textColor}` }}>
                                        <p>{pi_icon}</p>
                                        <p>{item?.name}</p>
                                    </DropItem>
                                )
                            })
                        }
                    </DropdownContainer>}
            </>
        )
    }

    const handleMenuClick = (item: any, index: any) => {

        setMenuActive(index);
        !item?.drop && window.open(item?.link, openLinkInNewTab ? '_blank' : '_self');
    }

    const handleMenuHover = (index: any) => {

        setDropOpen(index);
        setMenuHover(index);
    }

    const handleMenuOut = () => {

        setDropOpen(-1);
        setMenuHover(-1);
    }

    return (
        <TopNavbarWidget
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >
            {/* left */}
            {(iconPosition == 'left' || iconPosition == '') && <TopNavbarWidgetLeft
                onClick={() => headerLink ? window.open(headerLink, openLinkInNewTab ? '_blank' : '_self') : headerFunction?.()} // click to open web pages or run function
            >
                {headerIcon ? <img src={headerIcon} alt={headerText} height={iconSize} width={iconSize} /> : <h1>{headerText}</h1>}
            </TopNavbarWidgetLeft>}

            {/* center */}
            <TopNavbarWidgetCenter onMouseLeave={handleMenuOut}>
                {
                    menuItems?.map((item, index) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column' }} onClick={() => handleMenuClick(item, index)} onMouseEnter={() => handleMenuHover(index)}>
                                <MenuItem key={index}>
                                    <MenuText index={index}>{item.name}</MenuText>
                                    {item.drop && <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill={`${(menuActive == index) ? hoverTextColor : textColor}`}>
                                        <path d="M12.5709 13.314L17.5209 8.364C17.6131 8.26849 17.7235 8.19231 17.8455 8.1399C17.9675 8.08749 18.0987 8.05991 18.2315 8.05875C18.3643 8.0576 18.496 8.0829 18.6189 8.13318C18.7417 8.18346 18.8534 8.25772 18.9473 8.35161C19.0412 8.4455 19.1154 8.55715 19.1657 8.68005C19.216 8.80295 19.2413 8.93463 19.2402 9.06741C19.239 9.20018 19.2114 9.3314 19.159 9.45341C19.1066 9.57541 19.0304 9.68576 18.9349 9.778L13.2779 15.435C13.0904 15.6225 12.8361 15.7278 12.5709 15.7278C12.3057 15.7278 12.0514 15.6225 11.8639 15.435L6.2069 9.778C6.11139 9.68576 6.03521 9.57541 5.9828 9.45341C5.93039 9.3314 5.9028 9.20018 5.90165 9.06741C5.9005 8.93463 5.9258 8.80295 5.97608 8.68005C6.02636 8.55715 6.10061 8.4455 6.1945 8.35161C6.2884 8.25772 6.40005 8.18346 6.52295 8.13318C6.64584 8.0829 6.77752 8.0576 6.9103 8.05875C7.04308 8.05991 7.1743 8.08749 7.2963 8.1399C7.41831 8.19231 7.52865 8.26849 7.6209 8.364L12.5709 13.314Z" fill={`${(menuActive == index) ? hoverTextColor : textColor}`} />
                                    </svg>}
                                </MenuItem>
                                {(dropOpen == index && item?.drop) ? <Dropdown /> : null}
                            </div>
                        )
                    })
                }

            </TopNavbarWidgetCenter>

            {iconPosition == 'center' && <TopNavbarWidgetLeft
                onClick={() => headerLink ? window.open(headerLink, openLinkInNewTab ? '_blank' : '_self') : headerFunction?.()} // click to open web pages or run function
            >
                {headerIcon ? <img src={headerIcon} alt={headerText} height={iconSize} width={iconSize} /> : <h1>{headerText}</h1>}
            </TopNavbarWidgetLeft>}

            {/* right */}
            <TopNavbarWidgetRight>

                <WOITextButton
                    backgroundColor="transparent"
                    borderColor="transparent"
                    borderRadius={8}
                    borderThickness=""
                    fontSize={16}
                    fontWeight={600}
                    height={50}
                    hoverBackgroundColor="transparent"
                    hoverTextColor="#2563EB"
                    loaderColor="#6d5252"
                    openLink="https://www.wikipedia.org/"
                    openLinkInNewTab
                    prefixIcon=""
                    text="Login"
                    textColor="#2563EB"
                    textTransform="capitalize"
                    width={200}
                />

                <WOITextButton
                    backgroundColor="#2563EB"
                    borderColor="#2563EB"
                    borderRadius={8}
                    borderThickness=""
                    fontSize={16}
                    fontWeight={600}
                    gradientDirection="left"
                    height={50}
                    hoverBackgroundColor="#2563EB"
                    hoverGradientDirection="left"
                    hoverTextColor="#ffffff"
                    loaderColor="#6d5252"
                    openLink="https://www.wikipedia.org/"
                    openLinkInNewTab
                    prefixIcon=""
                    suffixIcon="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                    text="Sign Up Free"
                    textColor="#ffffff"
                    textTransform="capitalize"
                    width={200}
                />

            </TopNavbarWidgetRight>

            {iconPosition == 'right' && <TopNavbarWidgetLeft
                onClick={() => headerLink ? window.open(headerLink, openLinkInNewTab ? '_blank' : '_self') : headerFunction?.()} // click to open web pages or run function
            >
                {headerIcon ? <img src={headerIcon} alt={headerText} height={iconSize} width={iconSize} /> : <h1>{headerText}</h1>}
            </TopNavbarWidgetLeft>}
        </TopNavbarWidget>
    );
};

export default WOITopNavbar;