import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
    icon: {
        src: "insert",
        background: "white",
        foreground: "#ff0000"
    },
	edit: Edit,
	save,
} );
