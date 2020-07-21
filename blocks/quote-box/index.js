/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register quote block
 */
export default registerBlockType("gccustom/quote-box", {
  title: __("Quote Box", "gccustom"),
  description: __(
    "A simple quote box",
    "gccustom"
  ),
  category: "common",
  icon: "admin-comments",
  keywords: [
    __("quote", "gccustom"),
    __("box", "gccustom"),
    __("quotebox", "gccustom")
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
		},
		button: {
			type: "array",
			source: "children",
			selector: ".button"
		}
  },
  edit: props => {
    const {
      attributes: { message, title, button },
      className,
      setAttributes
    } = props;
    const onChangeMessage = message => {
      setAttributes({ message });
    };
		const onChangeTitle = title => {
			setAttributes({title});
		};
		const onChangeButton = button => {
			setAttributes({button});
		};
    return (
      <div className={className}>
        <RichText
          tagName="h5"
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
				<RichText
					tagName="button"
					placeholder={__("Button text", "gccustom")}
          onChange={onChangeButton}
          value={button}
				/>
      </div>
    );
  },
  save: props => {
    const {
      attributes: { message, title, button }
    } = props;
    return (
      <div>
        <h5 class="title">{title}</h5>
        <div class="message-body">{message}</div>
				<button class="button">{button}</button>
      </div>
    );
  }
});
