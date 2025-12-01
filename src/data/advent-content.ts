export interface DayContent {
  title: string;
  description: string;
  code?: string;
  links: {
    mdn?: string;
    webdev?: string;
    youtube?: string;
  };
  browserSupport: {
    chrome: string;
    firefox: string;
    safari: string;
    edge: string;
  };
}

export const adventContent: Record<number, DayContent> = {
  1: {
    title: "CSS Alignment for Absolute Positioning",
    description: "Firefox 134 (January 2025) brought support for align-self, justify-self, and place-self properties on absolutely positioned elements, making it easier to align positioned elements without complex calculations.",
    code: `.container {
  position: relative;
}

.positioned {
  position: absolute;
  align-self: center;
  justify-self: center;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",
      webdev: "https://web.dev/blog/web-platform-01-2025"
    },
    browserSupport: {
      chrome: "122+",
      firefox: "134+",
      safari: "No",
      edge: "122+"
    }
  },
  2: {
    title: "CSS Sideways Writing Modes",
    description: "Chrome 132 (January 2025) added sideways-rl and sideways-lr keywords for the writing-mode property, helpful for writing non-CJK text vertically with proper orientation.",
    code: `.vertical-text {
  writing-mode: sideways-rl;
}

.vertical-text-left {
  writing-mode: sideways-lr;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
      webdev: "https://web.dev/blog/web-platform-01-2025"
    },
    browserSupport: {
      chrome: "132+",
      firefox: "43+",
      safari: "18.4+",
      edge: "132+"
    }
  },
  3: {
    title: "Device Posture API",
    description: "Chrome 132 (January 2025) includes detection for foldable screens with the device-posture CSS media feature, supporting continuous (flat) and folded postures for responsive layouts on foldable devices.",
    code: `@media (device-posture: folded) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (device-posture: continuous) {
  .content {
    grid-template-columns: 1fr;
  }
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-01-2025#device_posture_api"
    },
    browserSupport: {
      chrome: "132+",
      firefox: "No",
      safari: "No",
      edge: "132+"
    }
  },
  4: {
    title: "Advanced CSS attr() Function",
    description: "Chrome 133 (February 2025) enhanced the attr() function to support types beyond string and usage in all CSS properties, opening up powerful new possibilities for data-driven styling.",
    code: `/* Use data attributes for styling */
.element {
  width: attr(data-width px);
  color: attr(data-color color);
}

<div class="element"
     data-width="200"
     data-color="blue">
</div>`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
      webdev: "https://developer.chrome.com/blog/advanced-attr"
    },
    browserSupport: {
      chrome: "133+",
      firefox: "No",
      safari: "No",
      edge: "133+"
    }
  },
  5: {
    title: "CSS Scroll State Container Queries",
    description: "Chrome 133 (February 2025) introduced container queries based on scroll state, allowing you to query whether a container is stuck (sticky), snapped, or scrollable.",
    code: `.container {
  container-type: scroll-state;
}

@container scroll-state(stuck: top) {
  .header {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}

@container scroll-state(snapped) {
  .item {
    opacity: 1;
  }
}`,
    links: {
      webdev: "https://developer.chrome.com/blog/css-scroll-state-queries"
    },
    browserSupport: {
      chrome: "133+",
      firefox: "No",
      safari: "No",
      edge: "133+"
    }
  },
  6: {
    title: "CSS Text Box Properties",
    description: "Chrome 133 and Safari 18.2 (February 2025) added text-box-trim and text-box-edge properties for fine control of vertical text alignment, removing unwanted spacing around text.",
    code: `.title {
  text-box-trim: both;
  text-box-edge: cap alphabetic;
}

/* Shorthand */
.heading {
  text-box: trim-both cap alphabetic;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim",
      webdev: "https://developer.chrome.com/blog/css-text-box-trim"
    },
    browserSupport: {
      chrome: "133+",
      firefox: "No",
      safari: "18.2+",
      edge: "133+"
    }
  },
  7: {
    title: "Popover Hint Value",
    description: "Chrome 133 (February 2025) added popover='hint' attribute value for tooltip-like behaviors where hint popovers can open without closing existing auto popovers.",
    code: `<button popovertarget="tooltip">
  Hover me
</button>

<div id="tooltip" popover="hint">
  This is a tooltip that won't close
  other popovers like select pickers
</div>`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
      webdev: "https://developer.chrome.com/blog/popover-hint"
    },
    browserSupport: {
      chrome: "133+",
      firefox: "No",
      safari: "No",
      edge: "133+"
    }
  },
  8: {
    title: ":has-slotted Pseudo-Class",
    description: "Firefox 136 (March 2025) added support for the :has-slotted pseudo-class, enabling styling of template elements based on whether they have slotted content in web components.",
    code: `/* Style the template based on slotted content */
template:has-slotted {
  border: 2px solid blue;
}

slot:has-slotted([data-type="featured"]) {
  background: gold;
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-03-2025"
    },
    browserSupport: {
      chrome: "134+",
      firefox: "136+",
      safari: "No",
      edge: "134+"
    }
  },
  9: {
    title: ":open Pseudo-Class",
    description: "Firefox 136 (March 2025) shipped the :open pseudo-class to select elements in an open state, including details, dialog, input pickers, and select dropdowns.",
    code: `/* Style open elements */
details:open {
  background: #f0f0f0;
}

dialog:open {
  animation: slideIn 0.3s ease-out;
}

select:open {
  outline: 2px solid blue;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/:open",
      webdev: "https://web.dev/blog/web-platform-03-2025#new_pseudo-classes_has-slotted_and_open"
    },
    browserSupport: {
      chrome: "133+",
      firefox: "136+",
      safari: "No",
      edge: "133+"
    }
  },
  10: {
    title: "Intl.DurationFormat",
    description: "March 2025 saw Intl.DurationFormat become Baseline Newly Available, providing locale-aware formatting of time durations across all major browsers.",
    code: `const duration = {
  hours: 2,
  minutes: 30,
  seconds: 15
};

const formatter = new Intl.DurationFormat('en', {
  style: 'long'
});

console.log(formatter.format(duration));
// "2 hours, 30 minutes, 15 seconds"`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat",
      webdev: "https://web.dev/blog/web-platform-03-2025#intldurationformat"
    },
    browserSupport: {
      chrome: "129+",
      firefox: "136+",
      safari: "16.4+",
      edge: "129+"
    }
  },
  11: {
    title: "contenteditable='plaintext-only'",
    description: "Firefox 136 (March 2025) made contenteditable='plaintext-only' Baseline Newly Available, allowing plain text editing without rich formatting.",
    code: `<div contenteditable="plaintext-only">
  This div accepts only plain text.
  No bold, italic, or other formatting
  will be preserved when pasting.
</div>`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable",
      webdev: "https://web.dev/blog/web-platform-03-2025#the_plaintext-only_value_of_the_contenteditable_attribute"
    },
    browserSupport: {
      chrome: "51+",
      firefox: "136+",
      safari: "5+",
      edge: "12+"
    }
  },
  12: {
    title: "shape() CSS Function",
    description: "Chrome 135 and Safari 18.4 (April 2025) added the shape() function for creating responsive free-form shapes with clip-path and offset-path, using a syntax similar to SVG paths.",
    code: `.element {
  clip-path: shape(
    from 0% 0%,
    line to 100% 0%,
    curve to 100% 100% via 75% 75%,
    line to 0% 100%,
    close
  );
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/shape",
      webdev: "https://web.dev/blog/web-platform-04-2025#the_css_shape_function"
    },
    browserSupport: {
      chrome: "135+",
      firefox: "Nightly",
      safari: "18.4+",
      edge: "135+"
    }
  },
  13: {
    title: "::scroll-button() and ::scroll-marker()",
    description: "Chrome 135 (April 2025) introduced carousel pseudo-elements for creating navigation controls and progress indicators for scrollable areas without JavaScript.",
    code: `/* Style scroll navigation buttons */
::scroll-button(left) {
  background: blue;
  color: white;
}

::scroll-button(right) {
  background: blue;
  color: white;
}

/* Style scroll progress markers */
::scroll-marker {
  background: gray;
}

::scroll-marker:current {
  background: blue;
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-04-2025#carousels_land_in_chrome"
    },
    browserSupport: {
      chrome: "135+",
      firefox: "No",
      safari: "No",
      edge: "135+"
    }
  },
  14: {
    title: "::column Pseudo-Element",
    description: "Chrome 135 (April 2025) added the ::column pseudo-element, allowing you to style individual column fragments in multi-column layouts.",
    code: `.multi-column {
  columns: 3;
}

.multi-column::column {
  background: linear-gradient(to bottom, #f0f0f0, white);
  padding: 1rem;
}

.multi-column::column:first-child {
  background: #e0e0ff;
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-04-2025#carousels_land_in_chrome"
    },
    browserSupport: {
      chrome: "135+",
      firefox: "No",
      safari: "No",
      edge: "135+"
    }
  },
  15: {
    title: "interactivity Property",
    description: "Chrome 135 (April 2025) introduced the interactivity property to specify whether an element and its descendants are inert, affecting focus, editing, selection, and accessibility.",
    code: `.backdrop {
  interactivity: inert;
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-04-2025#carousels_land_in_chrome"
    },
    browserSupport: {
      chrome: "135+",
      firefox: "No",
      safari: "No",
      edge: "135+"
    }
  },
  16: {
    title: "command and commandfor Attributes",
    description: "Chrome 135 (April 2025) shipped command and commandfor attributes to enhance button functionality with built-in browser handling, improving accessibility and simplifying common UI patterns.",
    code: `<!-- Toggle button -->
<button commandfor="sidebar" command="toggle">
  Toggle Sidebar
</button>

<!-- Show/hide buttons -->
<button commandfor="modal" command="show">
  Open Modal
</button>

<button commandfor="modal" command="hide">
  Close Modal
</button>`,
    links: {
      webdev: "https://web.dev/blog/web-platform-04-2025#the_command_and_commandfor_attributes"
    },
    browserSupport: {
      chrome: "135+",
      firefox: "144+",
      safari: "TP",
      edge: "135+"
    }
  },
  17: {
    title: "Temporal API",
    description: "Firefox 139 (May 2025) became the first browser to support the Temporal API, which simplifies working with dates and times with built-in time zone and calendar representations.",
    code: `// Create precise date-time values
const now = Temporal.Now.instant();
const date = Temporal.PlainDate.from('2025-05-15');

// Easy time zone conversions
const nyTime = Temporal.Now.zonedDateTimeISO('America/New_York');
const tokyoTime = nyTime.withTimeZone('Asia/Tokyo');

// Duration calculations
const duration = Temporal.Duration.from({ hours: 2, minutes: 30 });`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal",
      webdev: "https://web.dev/blog/web-platform-05-2025#temporal_api"
    },
    browserSupport: {
      chrome: "No",
      firefox: "139+",
      safari: "No",
      edge: "No"
    }
  },
  18: {
    title: "hidden='until-found' Attribute",
    description: "Firefox 139 (May 2025) added support for hidden='until-found' which hides element contents until found via user search or fragment navigation, with the beforematch event firing before revealing.",
    code: `<section hidden="until-found" id="secret">
  This content is hidden until searched
  or navigated to via fragment (#secret)
</section>

<script>
document.querySelector('#secret')
  .addEventListener('beforematch', (e) => {
    console.log('Content about to be revealed!');
  });
</script>`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden",
      webdev: "https://web.dev/blog/web-platform-05-2025#hiddenuntil-found_and_the_beforematch_event"
    },
    browserSupport: {
      chrome: "102+",
      firefox: "139+",
      safari: "No",
      edge: "102+"
    }
  },
  19: {
    title: "reading-flow and reading-order",
    description: "Chrome 137 (May 2025) introduced reading-flow and reading-order properties to control element exposure to accessibility tools and focus navigation, solving tab order issues in grid/flex layouts.",
    code: `.grid {
  display: grid;
  reading-flow: grid-rows;
}

.flex-container {
  display: flex;
  reading-flow: flex-visual;
}

/* Override specific item order */
.item-1 { reading-order: 1; }
.item-2 { reading-order: 3; }
.item-3 { reading-order: 2; }`,
    links: {
      webdev: "https://web.dev/blog/web-platform-05-2025#css_reading-flow_and_reading-order"
    },
    browserSupport: {
      chrome: "137+",
      firefox: "No",
      safari: "No",
      edge: "137+"
    }
  },
  20: {
    title: "CSS if() Function",
    description: "Chrome 137 (May 2025) shipped the if() function, providing a concise way to express conditional values with condition-value pairs, returning the value for the first true condition.",
    code: `.element {
  /* Conditional sizing */
  width: if(
    style(--large): 800px,
    style(--medium): 600px,
    400px
  );

  /* Conditional colors */
  background: if(
    style(--theme-dark): black,
    white
  );
}`,
    links: {
      webdev: "https://web.dev/blog/web-platform-05-2025"
    },
    browserSupport: {
      chrome: "137+",
      firefox: "No",
      safari: "No",
      edge: "137+"
    }
  },
  21: {
    title: "Document-Isolation-Policy",
    description: "Chrome 137 (May 2025) introduced Document-Isolation-Policy, enabling crossOriginIsolation for documents without deploying COOP or COEP headers, backed by process isolation.",
    code: `<!-- Set via meta tag -->
<meta http-equiv="Document-Isolation-Policy"
      content="isolate-and-require-corp">

<!-- Or via HTTP header -->
Document-Isolation-Policy: isolate-and-require-corp

<!-- Non-CORS subresources need credentials or CORP -->
<img src="..." crossorigin="use-credentials">`,
    links: {
      webdev: "https://web.dev/blog/web-platform-05-2025#document-isolation-policy"
    },
    browserSupport: {
      chrome: "137+",
      firefox: "No",
      safari: "No",
      edge: "137+"
    }
  },
  22: {
    title: "Promise.try()",
    description: "Firefox 134 (January 2025) made Promise.try() Baseline Newly Available - a convenience method that simplifies error handling for synchronous callback functions by treating them uniformly with async functions.",
    code: `// Uniform error handling for sync and async
Promise.try(() => {
  // This could throw or return a promise
  return maybeAsyncOperation();
})
.then(result => console.log(result))
.catch(error => console.error(error));

// Replaces this pattern:
Promise.resolve()
  .then(() => maybeAsyncOperation())
  .then(result => console.log(result))
  .catch(error => console.error(error));`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try",
      webdev: "https://web.dev/blog/web-platform-01-2025#promisetry_is_now_baseline_newly_available"
    },
    browserSupport: {
      chrome: "128+",
      firefox: "134+",
      safari: "18.2+",
      edge: "128+"
    }
  },
  23: {
    title: "contrast-color() Function",
    description: "Safari (2025) became the first browser to add support for the contrast-color() function, providing a way to automatically select the color with the most contrast against another color.",
    code: `/* Automatic text color based on background */
.button {
  background: var(--theme-color);
  color: contrast-color(var(--theme-color));
}

/* With specific targets */
.badge {
  background: var(--status-color);
  color: contrast-color(
    var(--status-color)
    vs white, black
  );
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/contrast-color"
    },
    browserSupport: {
      chrome: "No",
      firefox: "No",
      safari: "26+",
      edge: "No"
    }
  },
  24: {
    title: "Cookie Store API",
    description: "Firefox 140 beta (2025) introduced the Cookie Store API, providing asynchronous, Promise-based cookie management for both the main thread and service workers, replacing the synchronous document.cookie.",
    code: `// Async cookie operations
await cookieStore.set({
  name: 'theme',
  value: 'dark',
  expires: Date.now() + 86400000
});

// Get cookies
const cookie = await cookieStore.get('theme');

// Watch for changes
cookieStore.addEventListener('change', (event) => {
  console.log('Cookie changed:', event.changed);
});`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API"
    },
    browserSupport: {
      chrome: "87+",
      firefox: "140+",
      safari: "18.4+",
      edge: "87+"
    }
  }
};
