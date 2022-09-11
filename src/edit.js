import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return <p { ...useBlockProps() }>Edit view of the starter block</p>;
}
