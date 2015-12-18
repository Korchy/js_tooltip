# Tooltip (javascript)

Tooltip

Under license: CC-BY-SA

Author:
---
Nikita Akimov
korchiy@yandex.ru

Usage:
---
- Copy 2 files to site directory

include into *.html:
  <link href="tooltip.css" type=text/css rel=stylesheet>
  <script type="text/javascript" src="tooltip.js"></script>
  
  <img onmouseover="ShowToolTip(this, event, 'ToolTipText');" onmouseout="HideToolTip(this);" src='XXX.jpg'>
