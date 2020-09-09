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
	+subRow
	+column
	+spacer
	+image
	+text
	+button

Format:

	+tag({option:'value'})

***General Options***

These options are available to all tags.

| Option | Default Value| Description | Usage
|--|--|--|--|
| width  | 600(px) | Container Width | Takes natural numbers as value.
| bgColor | #FFFFFF | Background color | Takes hex color code as value
| paddingTop | 0 | Top padding | Takes natural numbers as value
| paddingRight | 0 | Right padding | Takes natural numbers as value
| paddingBottom | 0 | Bottom padding | Takes natural numbers as value
| paddingLeft | 0 | Left padding | Takes natural numbers as value
| borderTop | 0 | Top border | Ex. 1px solid #000000
| borderRight | 0 | Right border | Ex. 1px solid #000000
| borderBottom | 0 | Bottom border | Ex. 1px solid #000000
| borderLeft | 0 | Left border | Ex. 1px solid #000000

---

**+wrapper**


| Option | Default Value| Description | Usage
|--|--|--|--|
| width  | 600(px) | Container Width | Takes natural numbers as value. Set to 'full' for 100%.
| bgSrc | none | Background image source | Takes in URL as value
| bgSize | cover | Background size | Choose either 'cover' or 'contain'
| bulletproof | false | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}

    +wrapper({customClass: '', width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

**+row** // **+subRow**

| Option | Default Value| Description | Usage
|--|--|--|--|
| direction | rtl | Direction of element content | rtl, ltr

      +row({width:  '600', direction:  'ltr', bgColor:  '#FFFFFF', paddingTop:  '0', paddingRight:  '0', paddingBottom:  '0', paddingLeft:  '0', borderTop:  '0', borderRight:  '0', borderBottom:  '0', borderLeft:  '0'})

---

**+column**

| Option | Default Value| Description | Usage
|--|--|--|--|
| mobileWidth | none (scaling) | Length of column on mobile | 100%, 75%, 66%, 50%, 33%, 25%, 10%, hide (Hides on mobile)
| bgSrc | none | Background image source | Takes in URL as value
| bgSize | cover | Background size | Choose either 'cover' or 'contain'
| bulletproof | false | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom

        +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

  **+image**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| imgHref | # | Anchor path | Takes url as value
| imgAlt | alt | Image alt text | takes text as value
| imgSrc | placeholder | Image source | Takes url as value
| responsive | false | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}

          +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgAlt: 'alt', responsive: 'true', imgSrc: ''})

---

**+text**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| fontFamily | Helvetica | Text font family | Takes font name as value
| fontSize | 14(px) | Text font size | Takes natural numbers as value
| fontWeight | normal | Text font weight | lighter, normal, bold, bolder
| lineHeight | 21(px) | Text line height | Takes natural numbers as value
| fontColor | #000000 | Text font color | Takes hex color codes as value
| txt | placeholder | Actual text | Takes text as value. HTML may also be written

          +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum'})

---

**+button**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| bulletproof | false | Adds support for border-radius on buttons on the Microsoft Outlook Email Client by using VML (Vector Markup Language). Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/  | ({bulletproof: 'true')}
| responsive | false | Buttosn take the width of its container (does not work with bulletproof buttons) | ({responsive: 'true')}
| btnBorderRadius | 0 | Button border radius | Takes natural number as value. Only usable when bulletproof is true
| btnHeight | 42(px) | Button height | Takes natural number as value
| btnWidth | 200(px) | Button width | Takes natural number as value
| btnColor | #000000 | Button background color | Takes hex color codes as value
| btnBorder | 0 | Button border | Ex. 1px solid #000000
| btnFontFamily | Helvetica | Button font family | Takes font name as value
| btnFontSize | 14(px) | Button font size | Takes natural number as value
| btnFontWeight | normal | Button font weight | lighter, normal, bold, bolder
| btnHref | # | Button anchor path | Takes URL as value
| btnTxtColor | #FFFFFF | Button text color | Takes hex color codes as value
| btnTxt | placeholder | Button actual text | Takes text as value

          +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnBorderRadius: '20', btnHeight: '42', btnWidth: '200', btnColor: '#000000', btnBorder: '0', btnFontFamily: 'Open Sans, Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnHref: '#', btnTxtColor: '#FFFFFF', btnTxt: 'Call-to-action'}) 

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
