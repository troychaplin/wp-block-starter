import {
    useBlockProps,
    RichText,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    ContrastChecker
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
    ColorPicker,
    ColorPalette
} from "@wordpress/components";
// import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    // const [ color, setColor ] = useState ( '#f00' );
    const { text, alignment, toggle, backgroundColor, textColor } = attributes;

    const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];

    const onChangeText = (newText) => {
        setAttributes({text: newText})
    }
    const onChangeAlignment = (newAlignment) => {
        setAttributes({alignment: newAlignment})
    }
    const onChangeToggle = (newToggle) => {
        setAttributes({toggle: newToggle})
    }
    const onChangeBackgroundColor = (newBgColor) => {
        setAttributes({backgroundColor: newBgColor})
    }
    const onChangeTextColor = (newTextColor) => {
        setAttributes({textColor: newTextColor})
    }
    
	return (
        <>
            <InspectorControls>
                <PanelBody
                    title={"Content"}
                    icon="text"
                    initialOpen
                >
                    <TextControl
                        label="Header Label"
                        value={text}
                        onChange={onChangeText}
                        help="help text"
                        />
                    <TextareaControl
                        label="Text Label"
                        value={text}
                        onChange={onChangeText}
                        help="help text"
                    />
                    <ToggleControl
                        label="Toggle Label"
                        checked={toggle}
                        onChange={onChangeToggle}
                    />
                </PanelBody>
                <PanelColorSettings
                    title={"Color Settings"}
                    disableCustomColors={false}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChangeBackgroundColor,
                            label: "Background Color"
                        },
                        {
                            value: textColor,
                            onChangeTextColor,
                            label: "Text Color"
                        }
                    ]}
                >
                    <ContrastChecker textColor={textColor} backgroundColor={backgroundColor} />
                </PanelColorSettings>
                <PanelBody title={"Color Panel"}>
                    <ColorPalette
                        colors={colors}
                        value={backgroundColor}
                        onChange={onChangeBackgroundColor}
                    />
                    <ColorPicker 
                        color={textColor}
                        onChange={onChangeTextColor}
                        enableAlpha
                        defaultValue="#000"
                    />
                </PanelBody>
            </InspectorControls>

            <BlockControls>
                <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
            </BlockControls>

            <BlockControls
                // This method of setting controls only allows for buttons,
                // not as flexible as components inside block contols
                controls={[
                    {
                        title: "Custom",
                        icon: "lightbulb",
                        onClick: () => console.log("Custom button clicked")
                    }
                ]}
            />

            <RichText
                {...useBlockProps({
                    className: `text-box-align-${alignment}`,
                    style: {
                        backgroundColor,
                        color: textColor
                    }
                })}
                onChange={onChangeText}
                value={text}
                placeholder={'Add some text for your block'}
                tagName="p"
                allowedFormats={[ 'core/bold', 'core/italic' ]}
            />
        </>
    );
}
