import ReactHtmlParser from 'react-html-parser';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register quote block
 */
export default registerBlockType("gccustom/further-reading-box", {
  title: __("Further Reading Box", "gccustom"),
  description: __(
    "A box to suggest further reading to your readers.",
    "gccustom"
  ),
  category: "formatting",
  icon: "share-alt2",
  keywords: [
    __("readmore", "gccustom"),
    __("further", "gccustom"),
    __("box", "gccustom")
  ],
  supports: {
    html: false
  },
  attributes: {
    message: {
      type: "array",
      source: "children",
      selector: ".message-body"
    }
  },
  edit: props => {
    const {
      attributes: { message },
      className,
      setAttributes
    } = props;
    const onChangeMessage = message => {
      setAttributes({ message });
    };
    return (
      <div className={className}>
				<span>Further Reading: </span>
        <RichText
          tagName="span"
          placeholder={__("Replace this text with your link", "gccustom")}
          onChange={onChangeMessage}
          value={message}
        />
				<span>  »</span>
      </div>
    );
  },
  save: props => {
    const {
      attributes: { message }
    } = props;
    return (
      <div>
				<span>Further Reading: </span>
        <span class="message-body">{message}</span>
				<span>  »</span>
      </div>
    );
  }
});
