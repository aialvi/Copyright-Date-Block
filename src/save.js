/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Returns the save content for the block.
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;

	if (!fallbackCurrentYear) {
		return null;
	}

	let displayDate;

	if (showStartingYear && startingYear) {
		displayDate = startingYear + "–" + fallbackCurrentYear;
	} else {
		displayDate = fallbackCurrentYear;
	}

	return <p {...useBlockProps.save()}>© {displayDate}</p>;
}
