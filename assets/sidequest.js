/* @ds-bundle: {"format":4,"namespace":"Sidequest","components":[{"name":"Button"},{"name":"Tag"},{"name":"Card"},{"name":"Alert"},{"name":"Input"},{"name":"Select"},{"name":"Switch"},{"name":"Checkbox"},{"name":"NavBar"},{"name":"Icon"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  /* Phosphor Icons (MIT), 256-unit grid. Fill weight for nav and status, bold for utility glyphs. */
  var ICONS = {"home": ["M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"], "work": ["M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"], "travel": ["M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z"], "play": ["M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"], "growth": ["M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"], "search": ["M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"], "chevron-down": ["M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"], "heart": ["M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z"], "heart-fill": ["M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"], "check-circle": ["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"], "info": ["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"], "warning": ["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"], "close": ["M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"], "check": ["M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"], "plus": ["M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"], "sparkle": ["M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"], "sunset": ["M248,160a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H56.45a73.54,73.54,0,0,1-.45-8,72,72,0,0,1,144,0,73.54,73.54,0,0,1-.45,8H240A8,8,0,0,1,248,160Zm-40,32H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16ZM80.84,59.58a8,8,0,0,0,14.32-7.16l-8-16a8,8,0,0,0-14.32,7.16ZM20.42,103.16l16,8a8,8,0,1,0,7.16-14.31l-16-8a8,8,0,1,0-7.16,14.31ZM216,112a8,8,0,0,0,3.57-.84l16-8a8,8,0,1,0-7.16-14.31l-16,8A8,8,0,0,0,216,112ZM164.42,63.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.32-7.16l-8,16A8,8,0,0,0,164.42,63.16Z"]};

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) out[k] = obj[k];
    return out;
  }

  /* Category to hue: one color per area of life, used the same way everywhere. */
  var CATEGORY = { work: 'purple', travel: 'teal', play: 'sky', gaming: 'sky', health: 'sage', finance: 'sunset', money: 'sunset', ideas: 'pink', home: 'neutral', personal: 'neutral' };
  var TONES = ['sunset', 'purple', 'teal', 'sky', 'pink', 'sage', 'coral', 'neutral'];
  function categoryTone(name) { return CATEGORY[String(name || '').toLowerCase()] || 'neutral'; }

  function Icon(props) {
    var size = props.size || 20;
    var a = { viewBox: '0 0 256 256', width: size, height: size, fill: 'currentColor', focusable: 'false', className: cx('sq-icon', props.className) };
    if (props.title) { a.role = 'img'; a['aria-label'] = props.title; } else { a['aria-hidden'] = 'true'; }
    return h('svg', a, (ICONS[props.name] || []).map(function (d, i) { return h('path', { key: i, d: d }); }));
  }

  function Button(props) {
    var variant = props.variant || 'secondary';
    var sm = props.size === 'sm';
    var rest = omit(props, ['variant', 'size', 'icon', 'iconOnly', 'className', 'children']);
    var el = props.href ? 'a' : 'button';
    if (el === 'button' && !rest.type) rest.type = 'button';
    if (props.iconOnly && !rest['aria-label'] && typeof props.children === 'string') rest['aria-label'] = props.children;
    return h(el, Object.assign(rest, { className: cx('sq-btn', 'sq-btn--' + variant, sm && 'sq-btn--sm', props.iconOnly && 'sq-btn--icon', props.className) }),
      props.icon ? h(Icon, { name: props.icon, size: sm ? 16 : 18 }) : null,
      props.iconOnly ? null : props.children);
  }

  function Tag(props) {
    var tone = TONES.indexOf(props.tone) >= 0 ? props.tone : (props.category ? categoryTone(props.category) : 'neutral');
    var el = props.href ? 'a' : props.onClick ? 'button' : 'span';
    var rest = omit(props, ['tone', 'category', 'variant', 'className', 'children']);
    if (el === 'button') rest.type = 'button';
    return h(el, Object.assign(rest, { className: cx('sq-tag', 'sq-tag--' + tone, props.variant === 'solid' && 'sq-tag--solid', props.className) }),
      props.children || props.category);
  }

  function Card(props) {
    var tone = TONES.indexOf(props.tone) >= 0 ? props.tone : categoryTone(props.category);
    var st = React.useState(!!props.defaultFavorite);
    var fav = props.favorite !== undefined ? props.favorite : st[0];
    function toggle() {
      if (props.favorite === undefined) st[1](!fav);
      if (props.onFavoriteChange) props.onFavoriteChange(!fav);
    }
    var media = props.media || (props.image ? h('img', { src: props.image, alt: props.imageAlt || '' }) : null);
    var Heading = 'h' + (props.headingLevel || 3);
    return h('article', { className: cx('sq-card', props.className) },
      media ? h('div', { className: 'sq-card__media' }, media) : null,
      h('div', { className: 'sq-card__body' },
        h('div', { className: 'sq-card__top' },
          props.category ? h('span', { className: 'sq-card__eyebrow sq-tone-text--' + tone }, props.category) : h('span', null),
          props.favoritable === false ? null : h('button', {
            type: 'button', className: cx('sq-card__fav', fav && 'is-on'), 'aria-pressed': fav ? 'true' : 'false',
            'aria-label': 'Favorite', onClick: toggle
          }, h(Icon, { name: fav ? 'heart-fill' : 'heart', size: 20 }))),
        h(Heading, { className: 'sq-card__title' }, props.title),
        props.children ? h('div', { className: 'sq-card__desc' }, props.children) : null));
  }

  var ALERT = {
    success: { icon: 'check-circle', title: 'Success' },
    info: { icon: 'info', title: 'Heads up' },
    danger: { icon: 'warning', title: 'Need attention' }
  };
  function Alert(props) {
    var kind = ALERT[props.kind] ? props.kind : 'info';
    var st = React.useState(true);
    if (!st[0]) return null;
    return h('div', { className: cx('sq-alert', 'sq-alert--' + kind, props.className), role: kind === 'danger' ? 'alert' : 'status' },
      h(Icon, { name: ALERT[kind].icon, size: 24, className: 'sq-alert__icon' }),
      h('div', { className: 'sq-alert__text' },
        h('p', { className: 'sq-alert__title' }, props.title || ALERT[kind].title),
        props.children ? h('div', { className: 'sq-alert__msg' }, props.children) : null),
      props.dismissible === false ? null : h('button', {
        type: 'button', className: 'sq-alert__close', 'aria-label': 'Dismiss',
        onClick: function () { if (props.onDismiss) props.onDismiss(); else st[1](false); }
      }, h(Icon, { name: 'close', size: 16 })));
  }

  function fieldShell(props, id, msgId, control, extra) {
    var msg = props.error || props.hint;
    return h('div', { className: cx('sq-field', props.error && 'sq-field--error', props.className) },
      props.label ? h('label', { className: 'sq-field__label', htmlFor: id }, props.label) : null,
      h('div', { className: cx('sq-field__box', props.icon && 'sq-field__box--icon') },
        props.icon ? h(Icon, { name: props.icon, size: 18, className: 'sq-field__icon' }) : null,
        control, extra || null),
      msg ? h('p', { id: msgId, className: props.error ? 'sq-field__error' : 'sq-field__hint' }, msg) : null);
  }

  function Input(props) {
    var auto = React.useId();
    var id = props.id || auto, msgId = id + '-msg';
    var rest = omit(props, ['label', 'hint', 'error', 'icon', 'className', 'id']);
    var control = h('input', Object.assign({ type: 'text' }, rest, {
      id: id, className: 'sq-field__control',
      'aria-invalid': props.error ? 'true' : undefined,
      'aria-describedby': (props.error || props.hint) ? msgId : undefined
    }));
    return fieldShell(props, id, msgId, control);
  }

  function Select(props) {
    var auto = React.useId();
    var id = props.id || auto, msgId = id + '-msg';
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : '');
    var value = props.value !== undefined ? props.value : st[0];
    var rest = omit(props, ['label', 'hint', 'error', 'icon', 'className', 'id', 'options', 'placeholder', 'defaultValue', 'value', 'onChange']);
    var options = (props.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
    var control = h('select', Object.assign(rest, {
      id: id, value: value,
      className: cx('sq-field__control', 'sq-select', value === '' && 'is-empty'),
      'aria-invalid': props.error ? 'true' : undefined,
      'aria-describedby': (props.error || props.hint) ? msgId : undefined,
      onChange: function (e) { if (props.value === undefined) st[1](e.target.value); if (props.onChange) props.onChange(e); }
    }),
      props.placeholder ? h('option', { value: '', disabled: true }, props.placeholder) : null,
      options.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); }));
    return fieldShell(props, id, msgId, control, h(Icon, { name: 'chevron-down', size: 16, className: 'sq-select__chevron' }));
  }

  function Switch(props) {
    var auto = React.useId();
    var id = props.id || auto;
    var st = React.useState(!!props.defaultChecked);
    var on = props.checked !== undefined ? props.checked : st[0];
    function flip() {
      if (props.disabled) return;
      if (props.checked === undefined) st[1](!on);
      if (props.onChange) props.onChange(!on);
    }
    return h('span', { className: cx('sq-switch', props.disabled && 'is-disabled', props.className) },
      h('button', {
        type: 'button', role: 'switch', id: id, 'aria-checked': on ? 'true' : 'false', disabled: props.disabled,
        className: cx('sq-switch__track', on && 'is-on'), onClick: flip
      }, h('span', { className: 'sq-switch__knob' })),
      props.label ? h('label', { htmlFor: id, className: 'sq-switch__label' }, props.label) : null);
  }

  function Checkbox(props) {
    var rest = omit(props, ['label', 'className']);
    return h('label', { className: cx('sq-check', props.disabled && 'is-disabled', props.className) },
      h('input', Object.assign(rest, { type: 'checkbox', className: 'sq-check__input' })),
      h('span', { className: 'sq-check__box', 'aria-hidden': 'true' }, h(Icon, { name: 'check', size: 14 })),
      h('span', { className: 'sq-check__label' }, props.label));
  }

  var NAV_ITEMS = [
    { id: 'home', label: 'Home', icon: 'home' }, { id: 'work', label: 'Work', icon: 'work' },
    { id: 'travel', label: 'Travel', icon: 'travel' }, { id: 'play', label: 'Play', icon: 'play' },
    { id: 'growth', label: 'Growth', icon: 'growth' }
  ];
  function NavBar(props) {
    var items = props.items || NAV_ITEMS;
    var st = React.useState(props.defaultActive || items[0].id);
    var active = props.active !== undefined ? props.active : st[0];
    return h('nav', { className: cx('sq-nav', props.className), 'aria-label': props['aria-label'] || 'Main' },
      h('ul', { className: 'sq-nav__list' }, items.map(function (it) {
        var on = it.id === active;
        var attrs = {
          className: cx('sq-nav__item', on && 'is-active'), 'aria-current': on ? 'page' : undefined,
          onClick: function () { if (props.active === undefined) st[1](it.id); if (props.onSelect) props.onSelect(it.id); }
        };
        var inner = [h(Icon, { key: 'i', name: it.icon, size: 24 }), h('span', { key: 'l', className: 'sq-nav__label' }, it.label)];
        return h('li', { key: it.id }, it.href
          ? h('a', Object.assign({ href: it.href }, attrs), inner)
          : h('button', Object.assign({ type: 'button' }, attrs), inner));
      })));
  }

  window.Sidequest = Object.assign(window.Sidequest || {}, {
    Button: Button, Tag: Tag, Card: Card, Alert: Alert, Input: Input, Select: Select,
    Switch: Switch, Checkbox: Checkbox, NavBar: NavBar, Icon: Icon,
    iconNames: Object.keys(ICONS), categoryTone: categoryTone
  });
})();
