/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register quote block
 */
export default registerBlockType("gccustom/reference-box", {
  title: __("References", "gccustom"),
  description: __(
    "A block for APA references",
    "gccustom"
  ),
  category: "common",
  icon: "welcome-learn-more",
  keywords: [
    __("references", "gccustom"),
    __("box", "gccustom"),
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
      attributes: { message, title },
      className,
      setAttributes
    } = props;
    const onChangeMessage = message => {
      setAttributes({ message });
    };
    return (
      <div className={className}>
        <h4>References</h4>
        <RichText
          tagName="div"
          multiline="p"
          placeholder={__("Type or paste your reference list here", "gccustom")}
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
				<h4>References</h4>
        <div class="message-body">{message}</div>
      </div>
    );
  }
});
