import * as i from "react";
import * as R from "react/jsx-runtime";
import {
  AnimatePresence as Dc,
  MotionConfig as Pc,
  useReducedMotion as xu,
  motion as Su,
} from "motion/react";
import {
  ArrowLeft as Nu,
  ArrowRight as Pu,
  ArrowUpRight as Fu,
  BookOpen as Iu,
  Check as Lu,
  Download as Vu,
  House as Hu,
  Maximize2 as Uu,
  MessagesSquare as Wu,
  MicVocal as Gu,
  Mic as Ku,
  Minus as qu,
  Pause as Ju,
  Play as Yu,
  Plus as Xu,
  RotateCcw as Zu,
  Search as Qu,
  ShieldCheck as $u,
  Square as ed,
  Trash2 as td,
  Volume2 as nd,
  ChevronDown as Ru,
  ChevronUp as zu,
  Circle as Bu,
  X as rd,
} from "lucide-react";
import { Root as Pg, Indicator as Ig } from "@radix-ui/react-checkbox";
import { Root as Ab, Indicator as jb } from "@radix-ui/react-progress";
import {
  Root as iC,
  List as aC,
  Trigger as oC,
  Content as sC,
} from "@radix-ui/react-tabs";
import {
  Root as Xx,
  Value as eS,
  Trigger as Qx,
  Icon as tS,
  Portal as iS,
  Content as oS,
  Viewport as vS,
  Item as wS,
  ItemIndicator as OS,
  ItemText as ES,
  ScrollUpButton as AS,
  ScrollDownButton as MS,
} from "@radix-ui/react-select";
import {
  Root as sx,
  Item as fx,
  Indicator as mx,
} from "@radix-ui/react-radio-group";
import {
  Root as qh,
  Trigger as Yh,
  Portal as $h,
  Overlay as tg,
  Content as ag,
  Close as mg,
  Title as ug,
  Description as fg,
} from "@radix-ui/react-dialog";
import { clsx as ad } from "clsx";
import { twMerge as Mw } from "tailwind-merge";
import { cva as cd } from "class-variance-authority";
import { z } from "zod";
const OE = z.string,
  kE = z.array,
  AE = z.object,
  jE = z.record;
function Nw(...e) {
  return Mw(ad(e));
}
const Fw = cd(
  `group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none`,
  {
    variants: {
      variant: {
        default: `bg-muted`,
        line: `gap-1 bg-transparent`,
      },
    },
    defaultVariants: {
      variant: `default`,
    },
  },
);
function Pw({ className: e, orientation: t = `horizontal`, ...n }) {
  return (0, R.jsx)(iC, {
    "data-slot": `tabs`,
    "data-orientation": t,
    orientation: t,
    className: Nw(
      `group/tabs flex gap-2 data-[orientation=horizontal]:flex-col`,
      e,
    ),
    ...n,
  });
}
function Iw({ className: e, variant: t = `default`, ...n }) {
  return (0, R.jsx)(aC, {
    "data-slot": `tabs-list`,
    "data-variant": t,
    className: Nw(
      Fw({
        variant: t,
      }),
      e,
    ),
    ...n,
  });
}
function Lw({ className: e, ...t }) {
  return (0, R.jsx)(oC, {
    "data-slot": `tabs-trigger`,
    className: Nw(
      `relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      `group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent`,
      `data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground`,
      `after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100`,
      e,
    ),
    ...t,
  });
}
function Rw({ className: e, ...t }) {
  return (0, R.jsx)(sC, {
    "data-slot": `tabs-content`,
    className: Nw(`flex-1 outline-none`, e),
    ...t,
  });
}
function zw({ ...e }) {
  return (0, R.jsx)(Xx, {
    "data-slot": `select`,
    ...e,
  });
}
function Bw({ ...e }) {
  return (0, R.jsx)(eS, {
    "data-slot": `select-value`,
    ...e,
  });
}
function Vw({ className: e, size: t = `default`, children: n, ...r }) {
  return (0, R.jsxs)(Qx, {
    "data-slot": `select-trigger`,
    "data-size": t,
    className: Nw(
      `flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,
      e,
    ),
    ...r,
    children: [
      n,
      (0, R.jsx)(tS, {
        asChild: !0,
        children: (0, R.jsx)(Ru, {
          className: `size-4 opacity-50`,
        }),
      }),
    ],
  });
}
function Hw({
  className: e,
  children: t,
  position: n = `item-aligned`,
  align: r = `center`,
  ...i
}) {
  return (0, R.jsx)(iS, {
    children: (0, R.jsxs)(oS, {
      "data-slot": `select-content`,
      className: Nw(
        `relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,
        n === `popper` &&
          `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
        e,
      ),
      position: n,
      align: r,
      ...i,
      children: [
        (0, R.jsx)(Ww, {}),
        (0, R.jsx)(vS, {
          className: Nw(
            `p-1`,
            n === `popper` &&
              `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1`,
          ),
          children: t,
        }),
        (0, R.jsx)(Gw, {}),
      ],
    }),
  });
}
function Uw({ className: e, children: t, ...n }) {
  return (0, R.jsxs)(wS, {
    "data-slot": `select-item`,
    className: Nw(
      `relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,
      e,
    ),
    ...n,
    children: [
      (0, R.jsx)(`span`, {
        "data-slot": `select-item-indicator`,
        className: `absolute right-2 flex size-3.5 items-center justify-center`,
        children: (0, R.jsx)(OS, {
          children: (0, R.jsx)(Lu, {
            className: `size-4`,
          }),
        }),
      }),
      (0, R.jsx)(ES, {
        children: t,
      }),
    ],
  });
}
function Ww({ className: e, ...t }) {
  return (0, R.jsx)(AS, {
    "data-slot": `select-scroll-up-button`,
    className: Nw(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, R.jsx)(zu, {
      className: `size-4`,
    }),
  });
}
function Gw({ className: e, ...t }) {
  return (0, R.jsx)(MS, {
    "data-slot": `select-scroll-down-button`,
    className: Nw(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, R.jsx)(Ru, {
      className: `size-4`,
    }),
  });
}
function Kw({ className: e, ...t }) {
  return (0, R.jsx)(sx, {
    "data-slot": `radio-group`,
    className: Nw(`grid gap-3`, e),
    ...t,
  });
}
function qw({ className: e, ...t }) {
  return (0, R.jsx)(fx, {
    "data-slot": `radio-group-item`,
    className: Nw(
      `aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40`,
      e,
    ),
    ...t,
    children: (0, R.jsx)(mx, {
      "data-slot": `radio-group-indicator`,
      className: `relative flex items-center justify-center`,
      children: (0, R.jsx)(Bu, {
        className: `absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary`,
      }),
    }),
  });
}
function Jw({ ...e }) {
  return (0, R.jsx)(qh, {
    "data-slot": `dialog`,
    ...e,
  });
}
function Yw({ ...e }) {
  return (0, R.jsx)(Yh, {
    "data-slot": `dialog-trigger`,
    ...e,
  });
}
function Qw({ className: e, children: t, showCloseButton: n = !0, ...r }) {
  return (0, R.jsxs)(Xw, {
    "data-slot": `dialog-portal`,
    children: [
      (0, R.jsx)(Zw, {}),
      (0, R.jsxs)(ag, {
        "data-slot": `dialog-content`,
        className: Nw(
          `fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`,
          e,
        ),
        ...r,
        children: [
          t,
          n &&
            (0, R.jsxs)(mg, {
              "data-slot": `dialog-close`,
              className: `absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
              children: [
                (0, R.jsx)(rd, {}),
                (0, R.jsx)(`span`, {
                  className: `sr-only`,
                  children: `Close`,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Xw({ ...e }) {
  return (0, R.jsx)($h, {
    "data-slot": `dialog-portal`,
    ...e,
  });
}
function Zw({ className: e, ...t }) {
  return (0, R.jsx)(tg, {
    "data-slot": `dialog-overlay`,
    className: Nw(
      `fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,
      e,
    ),
    ...t,
  });
}
function $w({ className: e, ...t }) {
  return (0, R.jsx)(ug, {
    "data-slot": `dialog-title`,
    className: Nw(`text-lg leading-none font-semibold`, e),
    ...t,
  });
}
function eT({ className: e, ...t }) {
  return (0, R.jsx)(fg, {
    "data-slot": `dialog-description`,
    className: Nw(`text-sm text-muted-foreground`, e),
    ...t,
  });
}
export {
  i,
  R,
  Dc,
  Pc,
  xu,
  Su,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  Pg,
  Ig,
  Ab,
  jb,
  Nw,
  Pw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Kw,
  qw,
  Jw,
  Yw,
  Qw,
  $w,
  eT,
  OE,
  kE,
  AE,
  jE,
};
