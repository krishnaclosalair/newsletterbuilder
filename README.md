# NewsletterBuilder

An open-source responsive email builder.

## Getting started

### Installation

1.) Install Node.js (https://nodejs.org/en/)

2.) Make sure you have git (https://git-scm.com/)

3.) Using the command line, clone this repository and navigate to it.

    git clone https://github.com/krishnaclosalair/newsletterbuilder.git
    cd newsletterbuilder

4.) Install dependencies.

    npm install

5.) Run Gulp

    node_modules/.bin/gulp

After this point, any .pug files saved/updated under the src folder should render as .html on the dist folder.

---

### Your first project

Create a copy of the newProject.pug file found inside the src folder. This is going to be your starting point.

## newProject.pug explained:

### Tags and Options

***Tag List***

	+wrapper
	+row
	+subrow
	+column
	+spacer
	+image
	+text
	+button
  +customcontent
  
Format:

	+tag({option:'value'})

***General Options***

These options are available to all tags.

| Option | Description | Usage
|--|--|--|
| width | Container Width | Takes natural numbers as value.
| bgColor | Background color | Takes hex color code as value
| paddingTop | Top padding | Takes natural numbers as value
| paddingRight | Right padding | Takes natural numbers as value
| paddingBottom | Bottom padding | Takes natural numbers as value
| paddingLeft | Left padding | Takes natural numbers as value
| borderTop | Top border | Ex. 1px solid #000000
| borderRight | Right border | Ex. 1px solid #000000
| borderBottom | Bottom border | Ex. 1px solid #000000
| borderLeft | Left border | Ex. 1px solid #000000
| customClass | Adds a class to the component's container | Takes a class name

---

**+wrapper**


| Option | Description | Usage
|--|--|--|
| width | Container Width | Takes natural numbers as value. Set to 'full' for 100%.
| bulletproof | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}
| bgSrc | Background image source | Takes in URL as value

```
+wrapper({customClass: '', width: '600', bulletproof: false, bgSrc: '', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
```

---

**+row** // **+subRow**

| Option | Description | Usage
|--|--|--|
| noMobilePadding | Option to add or remove horizontal padding on mobile | Takes true or false
| direction | Direction of element content on desktop | rtl, ltr

```
+row({customClass: '', noMobilePadding: false, width: '600', direction: 'ltr', bgColor: '#FFFFFF', paddingTop: '32', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
```

---

**+column**

| Option | Description | Usage
|--|--|--|
| bulletproof | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}
| bgSrc | Background image source | Takes in URL as value
| mobileWidth | Length of column on mobile | 100%, 75%, 66%, 50%, 33%, 25%, 10%, hide (Hides on mobile)
| direction | Direction of element content | rtl, ltr
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom

```
+column({customClass: '', width: '550', bulletproof: false, bgSrc: '', mobileWidth: '100%', direction: 'ltr', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
```

---

**+spacer**

```
+spacer({width: '25', mobileWidth: 'hide', bgColor: '#FFFFFF'})
```

---

  **+image**

| Option | Description | Usage
|--|--|--|
| align | Horizontal alignment | left, center, right
| valign | Vertical alignment | top, middle, bottom
| removeLink | Option to add or remove anchor on images | Takes true or false
| imgHref | Anchor path | Takes url as value
| imgAlt | Image alt text | takes text as value
| responsive | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}
| imgSrc | Image source | Takes url as value
| imageHeight | Image height | Takes natural numbers as value. **Only** use this option when the image is less than 19px in height. There is a quirk in desktop Outlook that causes `td` and `th` elements to have a minimum height of 19px unless otherwise specified - this quirk creates white lines above the image if you don't use a [counterspell](https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=500875).

```
+image({width: '550', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', removeLink: false, imgHref: '#', imgAlt: 'alt', responsive: true, imgSrc: '', imageHeight: ''})
```

---

**+text**

| Option | Description | Usage
|--|--|--|
| align | Horizontal alignment | left, center, right
| mobileALignment | Horizontal alignment on mobile | left, center, right
| valign | Vertical alignment | top, middle, bottom
| fontFamily | Text font family | Takes font name as value
| fontSize | Text font size | Takes natural numbers as value
| fontWeight | Text font weight | lighter, normal, bold, bolder
| lineHeight | Text line height | Takes natural numbers as value
| fontColor | Text font color | Takes hex color codes as value
| type | Text type - Controlled by changing the text settings at the top of the document | primary, secondary, tertiary, body, small
| txt | Actual text | Takes text as value. HTML may also be written

**Text and Colour Settings**
```
  -
    const color = {
      primary: #000000,
      secondary: #000000,
      tertiary: #000000,
    };
```


```
  - 
    let font = {
      style: {
        primary: {
          family: 'Open Sans, Helvetica, sans-serif',
          size: '28',
          weight: 'bold',
          height: '32',
          color: '#000000'
        },
        secondary: {
          family: 'Open Sans, Helvetica, sans-serif',
          size: '24',
          weight: 'bold',
          height: '28',
          color: '#000000'
        },
        tertiary: {
          family: 'Open Sans, Helvetica, sans-serif',
          size: '20',
          weight: 'bold',
          height: '24',
          color: '#000000'
        },
        body: {
          family: 'Open Sans, Helvetica, sans-serif',
          size: '15',
          weight: 'normal',
          height: '19',
          color: '#000000'
        },
        small: {
          family: 'Open Sans, Helvetica, sans-serif',
          size: '11',
          weight: 'normal',
          height: '15',
          color: '#000000'
        }
      }
    };
```

```
+text({customClass: 'customFont', width: '550', align: 'center', mobileAlignment: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', type: 'body', txt: ''})
```

---

**+button**

| Option | Description | Usage
|--|--|--|
| align | Horizontal alignment | left, center, right
| valign | Vertical alignment | top, middle, bottom
| bulletproof | Adds support for border-radius on buttons on the Microsoft Outlook Email Client by using VML (Vector Markup Language). Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/  | ({bulletproof: 'true')}
| responsive | Buttons take the width of its container (does not work with bulletproof buttons) | ({responsive: 'true')}
| btnBorderRadius | Button border radius | Takes natural number as value. Only usable when bulletproof is true
| btnHeight | Button height | Takes natural number as value
| btnWidth | Button width | Takes natural number as value
| btnColor | Button background color | Takes hex color codes as value
| btnBorder | Button border | Ex. 1px solid #000000
| btnFontFamily | Button font family | Takes font name as value
| btnFontSize | Button font size | Takes natural number as value
| btnFontWeight | Button font weight | lighter, normal, bold, bolder
| btnHref | Button anchor path | Takes URL as value
| btnTxtColor | Button text color | Takes hex color codes as value
| btnTxt | Button actual text | Takes text as value

```
+button({customClass: 'customFont', width: '550', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: false, responsive: false, btnWidth: '200', btnHeight: '50', btnBorder: '0', btnBorderRadius: '0', btnColor: '#000000', btnFontFamily: 'Open Sans,Helvetica,sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnHref: '#', btnTxtColor: '#FFFFFF', type: 'primary', btnTxt: 'Call-to-action'})
```

---

**+customcontent**

| Option | Description | Usage
|--|--|--|
| align | Horizontal alignment | left, center, right
| mobileALignment | Horizontal alignment on mobile | left, center, right
| valign | Vertical alignment | top, middle, bottom
| content | HTML | Takes HTML as value.

```
+customcontent({customClass: '', width: '550', align: 'center', mobileAlignment: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', type: 'secondary', content: `
<a href="#" target="_blank" style="text-decoration:none;border:0;outline:0;"><img src="http://placehold.jp/200x50.jpg" alt="alt" width="200" border="0" style="display:inline;border:none;width:200px;"></a>
`})
```

---

***NOTE: Unit expression not recessary. (Use 14 instead of 14px)***

### Structure

**Single Column**

		+wrapper
			+row
				+column
					CONTENT

**Multiple Columns**

		+wrapper
			+row
				+column
					CONTENT
				+column
					CONTENT

**Nested Columns**

		+wrapper
			+row
				+column
					+subRow
						+column
							CONTENT
						+column
							CONTENT
				+column
					CONTENT

***NOTE: Make sure that the widths of the components within multiple columns are equal to its container***

For example:

		+wrapper({width: '600'})
			+row({width: '600'})
				+column({width: '300'})
					CONTENT
				+column({width: '300')}
					CONTENT

Or

		+wrapper({width: '600'})
			+row({width: '600', paddingLeft: '50', paddingRight: '50'})
				+column({width: '250'}) // Total remaining width is 500 because of left and right padding
					CONTENT
				+column({width: '250')} // Therefore columns will only have 250 on each
					CONTENT
