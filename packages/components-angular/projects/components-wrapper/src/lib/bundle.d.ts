export interface HTMLStencilElement extends HTMLElement {
	componentOnReady(): Promise<this>;
}
export type TextSize = "x-small" | "small" | "medium" | "large" | "x-large" | "inherit";
export type TextWeight = "thin" | "regular" | "semibold" | "bold";
export type HeadlineVariant = "large-title" | "headline-1" | "headline-2" | "headline-3" | "headline-4" | "headline-5";
export type Theme = "light" | "dark";
export type ButtonType = "button" | "submit" | "reset";
export type LinkTarget = "_self" | "_blank" | "_parent" | "_top" | string;
export type FormState = "none" | "error" | "success";
export type TabChangeEvent = {
	activeTabIndex: number;
};
export type NumberOfPageLinks = 5 | 7;
declare global {
	const ROLLUP_REPLACE_IS_STAGING: string;
}
export type IconName = "360" | "active-cabin-ventilation" | "add" | "adjust" | "arrow-double-down" | "arrow-double-left" | "arrow-double-right" | "arrow-double-up" | "arrow-down" | "arrow-first" | "arrow-head-down" | "arrow-head-left" | "arrow-head-right" | "arrow-head-up" | "arrow-last" | "arrow-left" | "arrow-right" | "arrow-up" | "augmented-reality" | "battery-empty" | "battery-full" | "bell" | "bookmark" | "broadcast" | "calculator" | "calendar" | "camera" | "car" | "car-battery" | "card" | "charging-active" | "charging-state" | "charging-station" | "chart" | "chat" | "check" | "city" | "climate" | "climate-control" | "clock" | "close" | "closed-caption" | "co2-emission" | "compare" | "configurate" | "country-road" | "cubic-capacity" | "delete" | "disable" | "document" | "download" | "duration" | "edit" | "email" | "exclamation" | "external" | "filter" | "flash" | "fuel-station" | "garage" | "gift" | "globe" | "grid" | "highway" | "home" | "horn" | "image" | "increase" | "information" | "key" | "leaf" | "leather" | "light" | "list" | "locate" | "lock" | "lock-open" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-facebook" | "logo-foursquare" | "logo-gmail" | "logo-google" | "logo-hatena" | "logo-instagram" | "logo-kaixin" | "logo-linkedin" | "logo-pinterest" | "logo-qq" | "logo-qq-share" | "logo-skyrock" | "logo-sohu" | "logo-tecent" | "logo-telegram" | "logo-tumblr" | "logo-twitter" | "logo-viber" | "logo-vk" | "logo-wechat" | "logo-weibo" | "logo-whatsapp" | "logo-xing" | "logo-yahoo" | "logo-youku" | "logo-youtube" | "logout" | "map" | "menu-dots-horizontal" | "menu-lines" | "minus" | "mobile" | "moon" | "oil-can" | "parking-brake" | "parking-light" | "pause" | "phone" | "pin" | "play" | "plug" | "plus" | "preheating" | "printer" | "purchase" | "question" | "racing-flag" | "refresh" | "replay" | "reset" | "route" | "rss" | "save" | "screen" | "search" | "send" | "share" | "shopping-bag" | "shopping-cart" | "sidelights" | "snowflake" | "sort" | "stack" | "star" | "steering-wheel" | "stopwatch" | "subtract" | "sun" | "switch" | "tablet" | "tachometer" | "truck" | "upload" | "user" | "user-group" | "user-manual" | "video" | "view" | "view-off" | "volume-off" | "volume-up" | "warning" | "weight" | "wifi" | "work" | "wrench" | "wrenches" | "zoom-in" | "zoom-out";
declare enum Breakpoint {
	base = "base",
	xs = "xs",
	s = "s",
	m = "m",
	l = "l",
	xl = "xl"
}
export declare type JSON5String = string;
export declare type BreakpointValues<T> = {
	[Breakpoint.base]: T;
	[Breakpoint.xs]?: T;
	[Breakpoint.s]?: T;
	[Breakpoint.m]?: T;
	[Breakpoint.l]?: T;
	[Breakpoint.xl]?: T;
};
export declare type BreakpointCustomizable<T> = T | BreakpointValues<T> | JSON5String;
export namespace Components {
	interface PBanner {
		/**
		  * Defines if the banner can be closed/removed by the user.
		 */
		"persistent"?: boolean;
		/**
		  * State of the banner.
		 */
		"state"?: "error" | "warning" | "neutral";
		/**
		  * Adapts the banner color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Defines the width of the banner corresponding to the `content-wrapper` dimensions
		 */
		"width"?: "basic" | "extended" | "fluid";
	}
	interface PButton {
		/**
		  * Disables the button. No events will be triggered while disabled state is active.
		 */
		"disabled"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
		 */
		"loading"?: boolean;
		/**
		  * To remove the element from tab order.
		 */
		"tabbable"?: boolean;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Specifies the type of the button.
		 */
		"type"?: ButtonType;
		/**
		  * The style variant of the button.
		 */
		"variant"?: "primary" | "secondary" | "tertiary";
	}
	interface PButtonPure {
		/**
		  * Disables the button. No events will be triggered while disabled state is active.
		 */
		"disabled"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
		 */
		"loading"?: boolean;
		/**
		  * Size of the button.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * To remove the element from tab order.
		 */
		"tabbable"?: boolean;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Specifies the type of the button.
		 */
		"type"?: ButtonType;
		/**
		  * The weight of the text (only has effect with visible label).
		 */
		"weight"?: TextWeight;
	}
	interface PCheckboxWrapper {
		/**
		  * Show or hide label. For better accessibility it's recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PContentWrapper {
		/**
		  * Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.
		 */
		"width"?: "basic" | "extended" | "fluid";
	}
	interface PDivider {
		/**
		  * Defines color depending on theme.
		 */
		"color"?: "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low";
		/**
		  * Defines orientation.
		 */
		"orientation"?: BreakpointCustomizable<"vertical" | "horizontal">;
		/**
		  * Adapts color depending on theme.
		 */
		"theme"?: Theme;
	}
	interface PFieldsetWrapper {
		/**
		  * The label text.
		 */
		"label"?: string;
	}
	interface PFlex {
		/**
		  * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
		 */
		"alignContent"?: BreakpointCustomizable<"stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
		/**
		  * Defines how the flex items are aligned along the cross axis.
		 */
		"alignItems"?: BreakpointCustomizable<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">;
		/**
		  * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
		 */
		"direction"?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse">;
		/**
		  * Defines the flex containers content flow if 2 or more containers are siblings of each other.
		 */
		"inline"?: BreakpointCustomizable<boolean>;
		/**
		  * Defines how the flex items are aligned along the main axis.
		 */
		"justifyContent"?: BreakpointCustomizable<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
		/**
		  * If set, overflowing elements will wrap to a new line.
		 */
		"wrap"?: BreakpointCustomizable<"nowrap" | "wrap" | "wrap-reverse">;
	}
	interface PFlexItem {
		/**
		  * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
		 */
		"alignSelf"?: BreakpointCustomizable<"auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch">;
		/**
		  * The shorthand property for the combined definition of "shrink", "grow" and "basis"
		 */
		"flex"?: BreakpointCustomizable<"initial" | "auto" | "none" | "equal">;
		/**
		  * The ability to allow/disallow the flex child to grow.
		 */
		"grow"?: BreakpointCustomizable<0 | 1>;
		/**
		  * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
		 */
		"offset"?: BreakpointCustomizable<"none" | "one-quarter" | "one-third" | "half" | "two-thirds" | "three-quarters">;
		/**
		  * The ability to allow/disallow the flex child to shrink.
		 */
		"shrink"?: BreakpointCustomizable<1 | 0>;
		/**
		  * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
		 */
		"width"?: BreakpointCustomizable<"auto" | "one-quarter" | "one-third" | "half" | "two-thirds" | "three-quarters" | "full">;
	}
	interface PGrid {
		/**
		  * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
		 */
		"direction"?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse">;
	}
	interface PGridItem {
		/**
		  * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
		 */
		"offset"?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
		/**
		  * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
		 */
		"size"?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
	}
	interface PHeadline {
		/**
		  * Text alignment of the component.
		 */
		"align"?: "left" | "center" | "right";
		/**
		  * Basic text color variations depending on theme property.
		 */
		"color"?: "default" | "inherit";
		/**
		  * Adds an ellipsis to a single line of text if it overflows.
		 */
		"ellipsis"?: boolean;
		/**
		  * Sets a custom HTML tag depending of the usage of the headline component.
		 */
		"tag"?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
		/**
		  * Style of the headline.
		 */
		"variant"?: HeadlineVariant;
	}
	interface PIcon {
		/**
		  * Basic color variations depending on theme property.
		 */
		"color"?: "brand" | "default" | "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low" | "notification-success" | "notification-warning" | "notification-error" | "notification-neutral" | "inherit";
		/**
		  * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
		 */
		"lazy"?: boolean;
		/**
		  * Specifies which icon to use.
		 */
		"name"?: IconName;
		/**
		  * The size of the icon.
		 */
		"size"?: "small" | "medium" | "large" | "inherit";
		/**
		  * Specifies a whole icon path which can be used for custom icons.
		 */
		"source"?: string;
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
		"variant"?: "outline" | "filled";
	}
	interface PLink {
		/**
		  * Special download attribute to open native browser download dialog if target url points to a downloadable file.
		 */
		"download"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the link color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The style variant of the link.
		 */
		"variant"?: "primary" | "secondary" | "tertiary";
	}
	interface PLinkPure {
		/**
		  * Display link in active state.
		 */
		"active"?: boolean;
		/**
		  * Special download attribute to open native browser download dialog if target url points to a downloadable file.
		 */
		"download"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Size of the link.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * The weight of the text (only has effect with visible label).
		 */
		"weight"?: TextWeight;
	}
	interface PLinkSocial {
		/**
		  * Show or hide label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: "logo-facebook" | "logo-google" | "logo-instagram" | "logo-linkedin" | "logo-pinterest" | "logo-twitter" | "logo-wechat" | "logo-whatsapp" | "logo-xing" | "logo-youtube" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-foursquare" | "logo-gmail" | "logo-hatena" | "logo-kaixin" | "logo-qq-share" | "logo-qq" | "logo-skyrock" | "logo-sohu" | "logo-tecent" | "logo-telegram" | "logo-tumblr" | "logo-viber" | "logo-vk" | "logo-weibo" | "logo-yahoo" | "logo-youku";
		/**
		  * A custom URL path to a custom social icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the icon color when used on dark background.
		 */
		"theme"?: Theme;
	}
	interface PMarque {
		/**
		  * Show/hide trademark sign.
		 */
		"trademark"?: boolean;
	}
	interface PModal {
		/**
		  * If true, the modal will not be closable via backdrop click.
		 */
		"disableBackdropClick"?: boolean;
		/**
		  * If true, the modal will not have a close button.
		 */
		"disableCloseButton"?: boolean;
		/**
		  * The title of the modal
		 */
		"heading"?: string;
		/**
		  * If true, the modal is open.
		 */
		"open": boolean;
	}
	interface PPagination {
		/**
		  * Index of the currently active page.
		 */
		"activePage"?: number;
		/**
		  * Aria label what the pagination is used for.
		 */
		"allyLabel"?: string;
		/**
		  * Aria label for next page icon.
		 */
		"allyLabelNext"?: string;
		/**
		  * Aria label for page navigation.
		 */
		"allyLabelPage"?: string;
		/**
		  * Aria label for previous page icon.
		 */
		"allyLabelPrev"?: string;
		/**
		  * The total count of items which should be shown per page.
		 */
		"itemsPerPage": number;
		/**
		  * The maximum number of page links rendered
		 */
		"maxNumberOfPageLinks"?: NumberOfPageLinks | BreakpointCustomizable<NumberOfPageLinks>;
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: "light" | "dark";
		/**
		  * The total count of items.
		 */
		"totalItemsCount": number;
	}
	interface PRadioButtonWrapper {
		/**
		  * Show or hide label. For better accessibility it's recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PSelectWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Changes the direction to which the dropdown list appears.
		 */
		"dropdownDirection"?: "down" | "up" | "auto";
		/**
		  * Filters select options by typing a character
		 */
		"filter"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
		/**
		  * Adapts the select color depending on the theme.
		 */
		"theme"?: Theme;
	}
	interface PSpinner {
		/**
		  * Size of the spinner.
		 */
		"size"?: BreakpointCustomizable<"small" | "medium" | "large" | "inherit">;
		/**
		  * Adapts the spinner color depending on the theme.
		 */
		"theme"?: "light" | "dark";
	}
	interface PTabs {
		/**
		  * Adapts the background gradient color of prev and next button.
		 */
		"gradientColorScheme"?: "default" | "surface";
		/**
		  * The text size.
		 */
		"size"?: "small" | "medium";
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The text weight.
		 */
		"weight"?: Extract<TextWeight, "regular" | "semibold">;
	}
	interface PTabsBar {
		/**
		  * Defines which tab to be visualized as selected (zero-based numbering).
		 */
		"activeTabIndex"?: number;
		/**
		  * Adapts the background gradient color of prev and next button.
		 */
		"gradientColorScheme"?: "default" | "surface";
		/**
		  * The text size.
		 */
		"size"?: BreakpointCustomizable<Extract<TextSize, "small" | "medium">>;
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The text weight.
		 */
		"weight"?: Extract<TextWeight, "regular" | "semibold">;
	}
	interface PTabsItem {
		/**
		  * Defines the label used in tabs.
		 */
		"label": string;
		"selected"?: boolean;
	}
	interface PText {
		/**
		  * Text alignment of the component.
		 */
		"align"?: "left" | "center" | "right";
		/**
		  * Basic text color variations depending on theme property.
		 */
		"color"?: "brand" | "default" | "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low" | "notification-success" | "notification-warning" | "notification-error" | "notification-neutral" | "inherit";
		/**
		  * Adds an ellipsis to a single line of text if it overflows.
		 */
		"ellipsis"?: boolean;
		/**
		  * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * Sets a custom HTML tag depending of the usage of the text component.
		 */
		"tag"?: "p" | "span" | "div" | "address" | "blockquote" | "figcaption" | "cite" | "time" | "legend";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
		/**
		  * The weight of the text.
		 */
		"weight"?: TextWeight;
	}
	interface PTextFieldWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Show or hide label and description text. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PTextList {
		/**
		  * The type of the text list.
		 */
		"listType"?: "unordered" | "ordered";
		/**
		  * The list style type of an ordered list.
		 */
		"orderType"?: "numbered" | "alphabetically";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
	}
	interface PTextListItem {
	}
	interface PTextareaWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
}
declare global {
	interface HTMLPBannerElement extends Components.PBanner, HTMLStencilElement {
	}
	var HTMLPBannerElement: {
		prototype: HTMLPBannerElement;
		new (): HTMLPBannerElement;
	};
	interface HTMLPButtonElement extends Components.PButton, HTMLStencilElement {
	}
	var HTMLPButtonElement: {
		prototype: HTMLPButtonElement;
		new (): HTMLPButtonElement;
	};
	interface HTMLPButtonPureElement extends Components.PButtonPure, HTMLStencilElement {
	}
	var HTMLPButtonPureElement: {
		prototype: HTMLPButtonPureElement;
		new (): HTMLPButtonPureElement;
	};
	interface HTMLPCheckboxWrapperElement extends Components.PCheckboxWrapper, HTMLStencilElement {
	}
	var HTMLPCheckboxWrapperElement: {
		prototype: HTMLPCheckboxWrapperElement;
		new (): HTMLPCheckboxWrapperElement;
	};
	interface HTMLPContentWrapperElement extends Components.PContentWrapper, HTMLStencilElement {
	}
	var HTMLPContentWrapperElement: {
		prototype: HTMLPContentWrapperElement;
		new (): HTMLPContentWrapperElement;
	};
	interface HTMLPDividerElement extends Components.PDivider, HTMLStencilElement {
	}
	var HTMLPDividerElement: {
		prototype: HTMLPDividerElement;
		new (): HTMLPDividerElement;
	};
	interface HTMLPFieldsetWrapperElement extends Components.PFieldsetWrapper, HTMLStencilElement {
	}
	var HTMLPFieldsetWrapperElement: {
		prototype: HTMLPFieldsetWrapperElement;
		new (): HTMLPFieldsetWrapperElement;
	};
	interface HTMLPFlexElement extends Components.PFlex, HTMLStencilElement {
	}
	var HTMLPFlexElement: {
		prototype: HTMLPFlexElement;
		new (): HTMLPFlexElement;
	};
	interface HTMLPFlexItemElement extends Components.PFlexItem, HTMLStencilElement {
	}
	var HTMLPFlexItemElement: {
		prototype: HTMLPFlexItemElement;
		new (): HTMLPFlexItemElement;
	};
	interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {
	}
	var HTMLPGridElement: {
		prototype: HTMLPGridElement;
		new (): HTMLPGridElement;
	};
	interface HTMLPGridItemElement extends Components.PGridItem, HTMLStencilElement {
	}
	var HTMLPGridItemElement: {
		prototype: HTMLPGridItemElement;
		new (): HTMLPGridItemElement;
	};
	interface HTMLPHeadlineElement extends Components.PHeadline, HTMLStencilElement {
	}
	var HTMLPHeadlineElement: {
		prototype: HTMLPHeadlineElement;
		new (): HTMLPHeadlineElement;
	};
	interface HTMLPIconElement extends Components.PIcon, HTMLStencilElement {
	}
	var HTMLPIconElement: {
		prototype: HTMLPIconElement;
		new (): HTMLPIconElement;
	};
	interface HTMLPLinkElement extends Components.PLink, HTMLStencilElement {
	}
	var HTMLPLinkElement: {
		prototype: HTMLPLinkElement;
		new (): HTMLPLinkElement;
	};
	interface HTMLPLinkPureElement extends Components.PLinkPure, HTMLStencilElement {
	}
	var HTMLPLinkPureElement: {
		prototype: HTMLPLinkPureElement;
		new (): HTMLPLinkPureElement;
	};
	interface HTMLPLinkSocialElement extends Components.PLinkSocial, HTMLStencilElement {
	}
	var HTMLPLinkSocialElement: {
		prototype: HTMLPLinkSocialElement;
		new (): HTMLPLinkSocialElement;
	};
	interface HTMLPMarqueElement extends Components.PMarque, HTMLStencilElement {
	}
	var HTMLPMarqueElement: {
		prototype: HTMLPMarqueElement;
		new (): HTMLPMarqueElement;
	};
	interface HTMLPModalElement extends Components.PModal, HTMLStencilElement {
	}
	var HTMLPModalElement: {
		prototype: HTMLPModalElement;
		new (): HTMLPModalElement;
	};
	interface HTMLPPaginationElement extends Components.PPagination, HTMLStencilElement {
	}
	var HTMLPPaginationElement: {
		prototype: HTMLPPaginationElement;
		new (): HTMLPPaginationElement;
	};
	interface HTMLPRadioButtonWrapperElement extends Components.PRadioButtonWrapper, HTMLStencilElement {
	}
	var HTMLPRadioButtonWrapperElement: {
		prototype: HTMLPRadioButtonWrapperElement;
		new (): HTMLPRadioButtonWrapperElement;
	};
	interface HTMLPSelectWrapperElement extends Components.PSelectWrapper, HTMLStencilElement {
	}
	var HTMLPSelectWrapperElement: {
		prototype: HTMLPSelectWrapperElement;
		new (): HTMLPSelectWrapperElement;
	};
	interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {
	}
	var HTMLPSpinnerElement: {
		prototype: HTMLPSpinnerElement;
		new (): HTMLPSpinnerElement;
	};
	interface HTMLPTabsElement extends Components.PTabs, HTMLStencilElement {
	}
	var HTMLPTabsElement: {
		prototype: HTMLPTabsElement;
		new (): HTMLPTabsElement;
	};
	interface HTMLPTabsBarElement extends Components.PTabsBar, HTMLStencilElement {
	}
	var HTMLPTabsBarElement: {
		prototype: HTMLPTabsBarElement;
		new (): HTMLPTabsBarElement;
	};
	interface HTMLPTabsItemElement extends Components.PTabsItem, HTMLStencilElement {
	}
	var HTMLPTabsItemElement: {
		prototype: HTMLPTabsItemElement;
		new (): HTMLPTabsItemElement;
	};
	interface HTMLPTextElement extends Components.PText, HTMLStencilElement {
	}
	var HTMLPTextElement: {
		prototype: HTMLPTextElement;
		new (): HTMLPTextElement;
	};
	interface HTMLPTextFieldWrapperElement extends Components.PTextFieldWrapper, HTMLStencilElement {
	}
	var HTMLPTextFieldWrapperElement: {
		prototype: HTMLPTextFieldWrapperElement;
		new (): HTMLPTextFieldWrapperElement;
	};
	interface HTMLPTextListElement extends Components.PTextList, HTMLStencilElement {
	}
	var HTMLPTextListElement: {
		prototype: HTMLPTextListElement;
		new (): HTMLPTextListElement;
	};
	interface HTMLPTextListItemElement extends Components.PTextListItem, HTMLStencilElement {
	}
	var HTMLPTextListItemElement: {
		prototype: HTMLPTextListItemElement;
		new (): HTMLPTextListItemElement;
	};
	interface HTMLPTextareaWrapperElement extends Components.PTextareaWrapper, HTMLStencilElement {
	}
	var HTMLPTextareaWrapperElement: {
		prototype: HTMLPTextareaWrapperElement;
		new (): HTMLPTextareaWrapperElement;
	};
	interface HTMLElementTagNameMap {
		"p-banner": HTMLPBannerElement;
		"p-button": HTMLPButtonElement;
		"p-button-pure": HTMLPButtonPureElement;
		"p-checkbox-wrapper": HTMLPCheckboxWrapperElement;
		"p-content-wrapper": HTMLPContentWrapperElement;
		"p-divider": HTMLPDividerElement;
		"p-fieldset-wrapper": HTMLPFieldsetWrapperElement;
		"p-flex": HTMLPFlexElement;
		"p-flex-item": HTMLPFlexItemElement;
		"p-grid": HTMLPGridElement;
		"p-grid-item": HTMLPGridItemElement;
		"p-headline": HTMLPHeadlineElement;
		"p-icon": HTMLPIconElement;
		"p-link": HTMLPLinkElement;
		"p-link-pure": HTMLPLinkPureElement;
		"p-link-social": HTMLPLinkSocialElement;
		"p-marque": HTMLPMarqueElement;
		"p-modal": HTMLPModalElement;
		"p-pagination": HTMLPPaginationElement;
		"p-radio-button-wrapper": HTMLPRadioButtonWrapperElement;
		"p-select-wrapper": HTMLPSelectWrapperElement;
		"p-spinner": HTMLPSpinnerElement;
		"p-tabs": HTMLPTabsElement;
		"p-tabs-bar": HTMLPTabsBarElement;
		"p-tabs-item": HTMLPTabsItemElement;
		"p-text": HTMLPTextElement;
		"p-text-field-wrapper": HTMLPTextFieldWrapperElement;
		"p-text-list": HTMLPTextListElement;
		"p-text-list-item": HTMLPTextListItemElement;
		"p-textarea-wrapper": HTMLPTextareaWrapperElement;
	}
}
declare namespace LocalJSX {
	interface PBanner {
		/**
		  * Emitted when the close button is clicked.
		 */
		"onDismiss"?: (event: CustomEvent<void>) => void;
		/**
		  * Defines if the banner can be closed/removed by the user.
		 */
		"persistent"?: boolean;
		/**
		  * State of the banner.
		 */
		"state"?: "error" | "warning" | "neutral";
		/**
		  * Adapts the banner color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Defines the width of the banner corresponding to the `content-wrapper` dimensions
		 */
		"width"?: "basic" | "extended" | "fluid";
	}
	interface PButton {
		/**
		  * Disables the button. No events will be triggered while disabled state is active.
		 */
		"disabled"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
		 */
		"loading"?: boolean;
		/**
		  * To remove the element from tab order.
		 */
		"tabbable"?: boolean;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Specifies the type of the button.
		 */
		"type"?: ButtonType;
		/**
		  * The style variant of the button.
		 */
		"variant"?: "primary" | "secondary" | "tertiary";
	}
	interface PButtonPure {
		/**
		  * Disables the button. No events will be triggered while disabled state is active.
		 */
		"disabled"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
		 */
		"loading"?: boolean;
		/**
		  * Size of the button.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * To remove the element from tab order.
		 */
		"tabbable"?: boolean;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * Specifies the type of the button.
		 */
		"type"?: ButtonType;
		/**
		  * The weight of the text (only has effect with visible label).
		 */
		"weight"?: TextWeight;
	}
	interface PCheckboxWrapper {
		/**
		  * Show or hide label. For better accessibility it's recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PContentWrapper {
		/**
		  * Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.
		 */
		"width"?: "basic" | "extended" | "fluid";
	}
	interface PDivider {
		/**
		  * Defines color depending on theme.
		 */
		"color"?: "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low";
		/**
		  * Defines orientation.
		 */
		"orientation"?: BreakpointCustomizable<"vertical" | "horizontal">;
		/**
		  * Adapts color depending on theme.
		 */
		"theme"?: Theme;
	}
	interface PFieldsetWrapper {
		/**
		  * The label text.
		 */
		"label"?: string;
	}
	interface PFlex {
		/**
		  * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
		 */
		"alignContent"?: BreakpointCustomizable<"stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
		/**
		  * Defines how the flex items are aligned along the cross axis.
		 */
		"alignItems"?: BreakpointCustomizable<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">;
		/**
		  * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
		 */
		"direction"?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse">;
		/**
		  * Defines the flex containers content flow if 2 or more containers are siblings of each other.
		 */
		"inline"?: BreakpointCustomizable<boolean>;
		/**
		  * Defines how the flex items are aligned along the main axis.
		 */
		"justifyContent"?: BreakpointCustomizable<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
		/**
		  * If set, overflowing elements will wrap to a new line.
		 */
		"wrap"?: BreakpointCustomizable<"nowrap" | "wrap" | "wrap-reverse">;
	}
	interface PFlexItem {
		/**
		  * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
		 */
		"alignSelf"?: BreakpointCustomizable<"auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch">;
		/**
		  * The shorthand property for the combined definition of "shrink", "grow" and "basis"
		 */
		"flex"?: BreakpointCustomizable<"initial" | "auto" | "none" | "equal">;
		/**
		  * The ability to allow/disallow the flex child to grow.
		 */
		"grow"?: BreakpointCustomizable<0 | 1>;
		/**
		  * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
		 */
		"offset"?: BreakpointCustomizable<"none" | "one-quarter" | "one-third" | "half" | "two-thirds" | "three-quarters">;
		/**
		  * The ability to allow/disallow the flex child to shrink.
		 */
		"shrink"?: BreakpointCustomizable<1 | 0>;
		/**
		  * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
		 */
		"width"?: BreakpointCustomizable<"auto" | "one-quarter" | "one-third" | "half" | "two-thirds" | "three-quarters" | "full">;
	}
	interface PGrid {
		/**
		  * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
		 */
		"direction"?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse">;
	}
	interface PGridItem {
		/**
		  * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
		 */
		"offset"?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
		/**
		  * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
		 */
		"size"?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
	}
	interface PHeadline {
		/**
		  * Text alignment of the component.
		 */
		"align"?: "left" | "center" | "right";
		/**
		  * Basic text color variations depending on theme property.
		 */
		"color"?: "default" | "inherit";
		/**
		  * Adds an ellipsis to a single line of text if it overflows.
		 */
		"ellipsis"?: boolean;
		/**
		  * Sets a custom HTML tag depending of the usage of the headline component.
		 */
		"tag"?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
		/**
		  * Style of the headline.
		 */
		"variant"?: HeadlineVariant;
	}
	interface PIcon {
		/**
		  * Basic color variations depending on theme property.
		 */
		"color"?: "brand" | "default" | "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low" | "notification-success" | "notification-warning" | "notification-error" | "notification-neutral" | "inherit";
		/**
		  * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
		 */
		"lazy"?: boolean;
		/**
		  * Specifies which icon to use.
		 */
		"name"?: IconName;
		/**
		  * The size of the icon.
		 */
		"size"?: "small" | "medium" | "large" | "inherit";
		/**
		  * Specifies a whole icon path which can be used for custom icons.
		 */
		"source"?: string;
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
	}
	interface PLink {
		/**
		  * Special download attribute to open native browser download dialog if target url points to a downloadable file.
		 */
		"download"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the link color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The style variant of the link.
		 */
		"variant"?: "primary" | "secondary" | "tertiary";
	}
	interface PLinkPure {
		/**
		  * Display link in active state.
		 */
		"active"?: boolean;
		/**
		  * Special download attribute to open native browser download dialog if target url points to a downloadable file.
		 */
		"download"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: IconName;
		/**
		  * A custom URL path to a custom icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Size of the link.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the button color depending on the theme.
		 */
		"theme"?: Theme;
		/**
		  * The weight of the text (only has effect with visible label).
		 */
		"weight"?: TextWeight;
	}
	interface PLinkSocial {
		/**
		  * Show or hide label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * When providing an url then the component will be rendered as `<a>`.
		 */
		"href"?: string;
		/**
		  * The icon shown.
		 */
		"icon"?: "logo-facebook" | "logo-google" | "logo-instagram" | "logo-linkedin" | "logo-pinterest" | "logo-twitter" | "logo-wechat" | "logo-whatsapp" | "logo-xing" | "logo-youtube" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-foursquare" | "logo-gmail" | "logo-hatena" | "logo-kaixin" | "logo-qq-share" | "logo-qq" | "logo-skyrock" | "logo-sohu" | "logo-tecent" | "logo-telegram" | "logo-tumblr" | "logo-viber" | "logo-vk" | "logo-weibo" | "logo-yahoo" | "logo-youku";
		/**
		  * A custom URL path to a custom social icon.
		 */
		"iconSource"?: string;
		/**
		  * Specifies the relationship of the target object to the link object.
		 */
		"rel"?: string;
		/**
		  * Target attribute where the link should be opened.
		 */
		"target"?: LinkTarget;
		/**
		  * Adapts the icon color when used on dark background.
		 */
		"theme"?: Theme;
	}
	interface PMarque {
		/**
		  * Show/hide trademark sign.
		 */
		"trademark"?: boolean;
	}
	interface PModal {
		/**
		  * If true, the modal will not be closable via backdrop click.
		 */
		"disableBackdropClick"?: boolean;
		/**
		  * If true, the modal will not have a close button.
		 */
		"disableCloseButton"?: boolean;
		/**
		  * The title of the modal
		 */
		"heading"?: string;
		/**
		  * Emitted when the component requests to be closed.
		 */
		"onClose"?: (event: CustomEvent<void>) => void;
		/**
		  * If true, the modal is open.
		 */
		"open"?: boolean;
	}
	interface PPagination {
		/**
		  * Index of the currently active page.
		 */
		"activePage"?: number;
		/**
		  * Aria label what the pagination is used for.
		 */
		"allyLabel"?: string;
		/**
		  * Aria label for next page icon.
		 */
		"allyLabelNext"?: string;
		/**
		  * Aria label for page navigation.
		 */
		"allyLabelPage"?: string;
		/**
		  * Aria label for previous page icon.
		 */
		"allyLabelPrev"?: string;
		/**
		  * The total count of items which should be shown per page.
		 */
		"itemsPerPage"?: number;
		/**
		  * The maximum number of page links rendered
		 */
		"maxNumberOfPageLinks"?: NumberOfPageLinks | BreakpointCustomizable<NumberOfPageLinks>;
		/**
		  * Emitted when the page changes.
		 */
		"onPageChange"?: (event: CustomEvent<{
			page: number;
			previousPage: number;
		}>) => void;
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: "light" | "dark";
		/**
		  * The total count of items.
		 */
		"totalItemsCount"?: number;
	}
	interface PRadioButtonWrapper {
		/**
		  * Show or hide label. For better accessibility it's recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PSelectWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Changes the direction to which the dropdown list appears.
		 */
		"dropdownDirection"?: "down" | "up" | "auto";
		/**
		  * Filters select options by typing a character
		 */
		"filter"?: boolean;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
		/**
		  * Adapts the select color depending on the theme.
		 */
		"theme"?: Theme;
	}
	interface PSpinner {
		/**
		  * Size of the spinner.
		 */
		"size"?: BreakpointCustomizable<"small" | "medium" | "large" | "inherit">;
		/**
		  * Adapts the spinner color depending on the theme.
		 */
		"theme"?: "light" | "dark";
	}
	interface PTabs {
		/**
		  * Adapts the background gradient color of prev and next button.
		 */
		"gradientColorScheme"?: "default" | "surface";
		/**
		  * Emitted when active tab is changed.
		 */
		"onTabChange"?: (event: CustomEvent<TabChangeEvent>) => void;
		/**
		  * The text size.
		 */
		"size"?: "small" | "medium";
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The text weight.
		 */
		"weight"?: Extract<TextWeight, "regular" | "semibold">;
	}
	interface PTabsBar {
		/**
		  * Defines which tab to be visualized as selected (zero-based numbering).
		 */
		"activeTabIndex"?: number;
		/**
		  * Adapts the background gradient color of prev and next button.
		 */
		"gradientColorScheme"?: "default" | "surface";
		/**
		  * Emitted when active tab is changed.
		 */
		"onTabChange"?: (event: CustomEvent<TabChangeEvent>) => void;
		/**
		  * The text size.
		 */
		"size"?: BreakpointCustomizable<Extract<TextSize, "small" | "medium">>;
		/**
		  * Adapts the color when used on dark background.
		 */
		"theme"?: Theme;
		/**
		  * The text weight.
		 */
		"weight"?: Extract<TextWeight, "regular" | "semibold">;
	}
	interface PTabsItem {
		/**
		  * Defines the label used in tabs.
		 */
		"label"?: string;
		"selected"?: boolean;
	}
	interface PText {
		/**
		  * Text alignment of the component.
		 */
		"align"?: "left" | "center" | "right";
		/**
		  * Basic text color variations depending on theme property.
		 */
		"color"?: "brand" | "default" | "neutral-contrast-high" | "neutral-contrast-medium" | "neutral-contrast-low" | "notification-success" | "notification-warning" | "notification-error" | "notification-neutral" | "inherit";
		/**
		  * Adds an ellipsis to a single line of text if it overflows.
		 */
		"ellipsis"?: boolean;
		/**
		  * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
		 */
		"size"?: BreakpointCustomizable<TextSize>;
		/**
		  * Sets a custom HTML tag depending of the usage of the text component.
		 */
		"tag"?: "p" | "span" | "div" | "address" | "blockquote" | "figcaption" | "cite" | "time" | "legend";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
		/**
		  * The weight of the text.
		 */
		"weight"?: TextWeight;
	}
	interface PTextFieldWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Show or hide label and description text. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface PTextList {
		/**
		  * The type of the text list.
		 */
		"listType"?: "unordered" | "ordered";
		/**
		  * The list style type of an ordered list.
		 */
		"orderType"?: "numbered" | "alphabetically";
		/**
		  * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
		 */
		"theme"?: Theme;
	}
	interface PTextListItem {
	}
	interface PTextareaWrapper {
		/**
		  * The description text.
		 */
		"description"?: string;
		/**
		  * Show or hide label. For better accessibility it is recommended to show the label.
		 */
		"hideLabel"?: BreakpointCustomizable<boolean>;
		/**
		  * The label text.
		 */
		"label"?: string;
		/**
		  * The message styled depending on validation state.
		 */
		"message"?: string;
		/**
		  * The validation state.
		 */
		"state"?: FormState;
	}
	interface IntrinsicElements {
		"p-banner": PBanner;
		"p-button": PButton;
		"p-button-pure": PButtonPure;
		"p-checkbox-wrapper": PCheckboxWrapper;
		"p-content-wrapper": PContentWrapper;
		"p-divider": PDivider;
		"p-fieldset-wrapper": PFieldsetWrapper;
		"p-flex": PFlex;
		"p-flex-item": PFlexItem;
		"p-grid": PGrid;
		"p-grid-item": PGridItem;
		"p-headline": PHeadline;
		"p-icon": PIcon;
		"p-link": PLink;
		"p-link-pure": PLinkPure;
		"p-link-social": PLinkSocial;
		"p-marque": PMarque;
		"p-modal": PModal;
		"p-pagination": PPagination;
		"p-radio-button-wrapper": PRadioButtonWrapper;
		"p-select-wrapper": PSelectWrapper;
		"p-spinner": PSpinner;
		"p-tabs": PTabs;
		"p-tabs-bar": PTabsBar;
		"p-tabs-item": PTabsItem;
		"p-text": PText;
		"p-text-field-wrapper": PTextFieldWrapper;
		"p-text-list": PTextList;
		"p-text-list-item": PTextListItem;
		"p-textarea-wrapper": PTextareaWrapper;
	}
}

export {};
