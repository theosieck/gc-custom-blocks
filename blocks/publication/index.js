/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register quote block
 */
export default registerBlockType("gccustom/publication", {
  title: __("Publication", "gccustom"),
  description: __(
    "A block for a single APA-style publication reference",
    "gccustom"
  ),
  category: "common",
  icon: "welcome-learn-more",
  keywords: [
    __("references", "gccustom"),
    __("publications", "gccustom"),
    __("apa", "gccustom")
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
        <RichText
          tagName="div"
					multiline="p"
          placeholder={__("Type or paste your publication here", "gccustom")}
          onChange={onChangeMessage}
          value={message}
        />
      </div>
    );
  },
  save: props => {
    const {
      attributes: { message }
    } = props;
    return (
      <div>
        <div class="message-body">{message}</div>
      </div>
    );
  }
});
