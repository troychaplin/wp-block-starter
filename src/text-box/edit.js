import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, DropdownMenu } from "@wordpress/components";
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {text} = attributes;
    
	return (
        <>
            <BlockControls
                // Less flexible than ToolbarGroup & ToolbarButton components
                // This method of setting controls only allows for buttons
                controls={[
                    {
                        title: "Undo",
                        icon: "undo",
                        onClick: () => console.log("Button 1 clicked")
                    },
                    {
                        title: "Settings",
                        icon: "admin-settings",
                        isActive: true,
                        onClick: () => console.log("Button 2 clicked")
                    }
                ]}
            >
                <ToolbarGroup>
                    <ToolbarButton title="Align Left" icon="editor-alignleft" onClick={() => console.log('Align Left')} />
                    <ToolbarButton title="Align Center" icon="editor-aligncenter" onClick={() => console.log('Align Center')} />
                    <ToolbarButton title="Align Right" icon="editor-alignright" onClick={() => console.log('Align Right')} />
                    <DropdownMenu icon="arrow-down-alt2" label={"More Alignments"} controls={[
                        {
                            title: "Align Wide",
                            icon: "align-wide"
                        },
                        {
                            title: "Align Full",
                            icon: "align-full-width"
                        }
                    ]} />
                </ToolbarGroup>
            </BlockControls>
            <RichText
                {...useBlockProps()}
                onChange={ (value) => setAttributes({text: value}) }
                value={text}
                placeholder={'Add some text for your block'}
                tagName="p"
                allowedFormats={[ 'core/bold', 'core/italic' ]}
            />
        </>
    );
}
