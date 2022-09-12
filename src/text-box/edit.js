import { useBlockProps, RichText, BlockControls, InspectorControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, ToggleControl, ColorPicker, ColorPalette } from "@wordpress/components";
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    // const [color, setColor] = useState();
    const [ color, setColor ] = useState ( '#f00' );
    const { text, alignment, toggle } = attributes;

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
                <PanelBody title={"Colors"}>
                    <ColorPalette
                        colors={colors}
                        value={color}
                        onChange={( color ) => setColor( color )}
                    />
                    <ColorPicker 
                        color={color}
                        onChange={setColor}
                        enableAlpha
                        defaultValue="#000"
                    />
                </PanelBody>
            </InspectorControls>

            <BlockControls>
                <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
            </BlockControls>
            <BlockControls
                // Less flexible than ToolbarGroup & ToolbarButton components
                // This method of setting controls only allows for buttons
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
                    className: `text-box-align-${alignment}`
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
