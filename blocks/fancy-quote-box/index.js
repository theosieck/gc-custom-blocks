/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register quote block
 */
export default registerBlockType("gccustom/fancy-quote-box", {
  title: __("Fancy Quote Box", "gccustom"),
  description: __(
    "A fancy quote box",
    "gccustom"
  ),
  category: "common",
  icon: "format-chat",
  keywords: [
    __("quote", "gccustom"),
    __("box", "gccustom"),
    __("fancy", "gccustom")
  ],
  supports: {
    html: false
  },
  attributes: {
    message: {
      type: "array",
      source: "children",
      selector: ".message-body"
    },
		title: {
			type: "array",
			source: "children",
			selector: ".title"
		}
  },
  edit: props => {
    const {
      attributes: { message, title },
      className,
      setAttributes
    } = props;
    const onChangeMessage = message => {
      setAttributes({ message });
    };
		const onChangeTitle = title => {
			setAttributes({title});
		}
    return (
      <div className={className}>
        <RichText
          tagName="p"
          placeholder={__("Title", "gccustom")}
          onChange={onChangeTitle}
          value={title}
        />
        <RichText
          tagName="div"
          multiline="p"
          placeholder={__("Content", "gccustom")}
          onChange={onChangeMessage}
          value={message}
        />
      </div>
    );
  },
  save: props => {
    const {
      attributes: { message, title }
    } = props;
    return (
      <div>
        <p class="title">{title}</p>
        <div class="message-body">{message}</div>
      </div>
    );
  }
});
