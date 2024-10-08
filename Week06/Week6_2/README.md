# CSS Specificty

The concept of CASCADE is tied to three rules:

- Importance
- Specificity
- Source Order

After these 3 rules are applied, a weight is applied to each rule to determine which one takes precedence.

### Importance

Importance relates to the source of a style sheet:

- User Agent - Browser default styling
- User - You may have configured your browser to have a specific style in your settings
- Author - These are Inline | Embedded | External stylesheets we developers write

These sources are processed in order.

### Inheritance

Inheritance is how property values propagate from parent to child elements

For example: A font style applied to the `<body>` tag, will cause that same font to be applied to all other elements on the page, unless specified differently.

Not all properties are inherited.

Inheritance can be forced using the inherit keyword font-family: inherit;

### Pseudo-Elements

A pseudo-element is used to apply a style to a part of an element

`p::first-line` The first line of a paragraph

`li::marker` The marker before a list item

`.clearfix::before` Content inserted before the element with the class clear fix

`.clearfix::after` Content inserted after the element with the class clear fix

### Pseudo-Classes

Pseudo-classes define the special state of an element

They are commonly used with anchor tags:
This is a difficult concept at first. It becomes even more important and convoluted when compiling SASS (later this semester).

## Specificty

Every CSS rule has a weight:

- One rule can be more, less, or equally important than another applied to the same element.
- We can and should calculate that weight
- There is an easy way to calculate each selectors weight

### Rules for Calculating Specificity

- Each TAG | ELEMENT | PSEUDO-ELEMENT is worth 1 point each
- Each ATTRIBUTE | CLASS | PSEUDO-CLASS is worth 10 points each
- Each ID is worth 100 points
- An inline style is worth 1000 points

### Examples

- `p.note` 1 tag (1) + 1 class (10) = 11 specificity points
- `#demo p[lang=“en”]` 1 ID (100) + 1 attribute (10) + 1 element = 111 specificity points
- `a:hover` 1 tag(1) + 1 pseudo-class (10) = 11

_If 2 rules have the same weight, the last one processed wins!_

### Guidelines | Suggestions

- Use generic selectors first, add specificity as necessary.
- Rely on specificity rather than ordering selectors
- Try to keep it as simple as possible.

_Seriously. Don’t get more specific than you need to!_



- `a:link` (unvisited link)
- `a:hover` (mouseover)
- `a:visited` (visited link)
- `a:active` (mousepress)

_NOTE: **pseudo-elements** have `::` where **pseudo-classes** have `:`_
