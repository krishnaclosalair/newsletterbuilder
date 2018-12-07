
# NewsletterBuilder

Responsive emails made easy.

### Write readable semantic code like this:

    +wrapper
      +row
        +column
          +img
          +txt
          +btn

### To render complicated nested tables like this:

        <table class="w100pc backgroundTable zwrapper" width="600" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
          <tbody>
            <tr>
              <td class="w100pc zwrapper" width="600" valign="top" bgcolor="#FFFFFF" background="none" style="padding-top: 0px;        padding-right: 0px;        padding-bottom: 0px;        padding-left: 0px;        border-top: 0;        border-right: 0;        border-bottom: 0;        border-left: 0;        background-size: auto;        background-position: auto;        background-repeat: auto;        width: 600px;">
                    <table class="w100pc zrow" width="600" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
                      <tbody>
                        <tr>
                          <td class="w100pc zrow pH" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;        padding-right: 0px;        padding-bottom: 0px;        padding-left: 0px;        border-top: 0;        border-right: 0;        border-bottom: 0;        border-left: 0;        width: 600px;">
                            <table class="w100pc zrow" width="600" dir="ltr" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
                              <tbody>
                                <tr>
                                      <th class="zcolumn" width="600" dir="ltr" align="center" valign="top" bgcolor="#FFFFFF" background="none" style="padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  border-top: 0;  border-right: 0;  border-bottom: 0;  border-left: 0;  background-position: auto;  background-repeat: auto;  width: 600px;">
                                        <table class="w100pc zcolumn" width="600" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
                                          <tbody>
                                                <tr>
                                                  <td class="w100pc" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;    padding-right: 0px;    padding-bottom: 0px;    padding-left: 0px;    border-top: 0;    border-right: 0;    border-bottom: 0;    border-left: 0;    width: 600px;"><a href="#" target="_blank" title="title" style="text-decoration: none; border: 0; outline: 0;"><img src="https://www.placehold.it/600x400" alt="alt" width="600" border="0" style="display: block; border: none; width: 600px;"/></a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td class="w100pc" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;    padding-right: 0px;    padding-bottom: 0px;    padding-left: 0px;    border-top: 0;    border-right: 0;    border-bottom: 0;    border-left: 0;    font-family: Helvetica, sans-serif;    font-size: 14px;    font-weight: normal;    line-height: 21px;    color: #000000;    width: 600px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td class="w100pc" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;    padding-right: 0px;    padding-bottom: 0px;    padding-left: 0px;    border-top: 0;    border-right: 0;    border-bottom: 0;    border-left: 0;    width: 600px;">
                                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="width: undefinedpx;">
                                                      <tbody>
                                                        <tr>
                                                          <td width="200" align="center" valign="middle" bgcolor="#000000" style="padding-top: 8px;              padding-right: 16px;              padding-bottom: 8px;              padding-left: 16px;              border: 0;              font-family: Helvetica, sans-serif;              font-size: 14px;              font-weight: normal;              line-height: 21px;              color: #FFFFFF;              width: 200px;"><a href="#" target="_blank" title="title" style="text-decoration: none; border: 0; outline: 0; color:#FFFFFF;">Lorem ipsum</a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                          </tbody>
                                        </table>
                                      </th>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
              </td>
            </tr>
          </tbody>
        </table>

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

Create a copy of the newProject.pug file found inside the src folder.

Code looks like this: 

	extends template.pug

	block vars

	  - var color = {bg: '#FFFFFF', txt: '#000000', hlight: '#000000'};
	  //- custom only supports fonts found on https://fonts.google.com/
	  - var font = {custom: [{name: 'Open Sans', weights: [400,700]}], default: 'Helvetica, sans-serif'}

	block font

	  - if (font.custom !== undefined)
	    each curFont in font.custom
	      - var fontName = curFont.name.split(' ').join('+');
	      - var fontWeights = curFont.weights.join(',');
	      link(href='https://fonts.googleapis.com/css?family=' + fontName + ':' + fontWeights, rel='stylesheet')/

	  // -->
	    <!--[if mso]>
	    <style>
	    body, table, td, th { font-family: #{font.default != '' ? font.default : 'Helvetica, sans-serif'} !important; }
	    </style>
	    <![endif]--> <!--

	block content
	 
	  //- START HERE
	  
	  //- Sample 1 Column Block 
	  +wrapper({width: '600', bgColor: '#FFFFFF', paddingTop: '32', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	  
	    +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	    
	      +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	      
	        +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://images.pexels.com/photos/1345089/pexels-photo-1345089.jpeg', imgWidth: '600'})
	        
	        +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '28', fontWeight: 'bold', lineHeight: '28', fontColor: '#000000', txt: 'Lorem ipsum'})
	        
	        +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis tristique interdum. In facilisis metus arcu, in eleifend felis vulputate auctor. Quisque congue pretium mauris a iaculis. Proin eget tempus nunc. Donec at est sapien.'})
	        
	        +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#000000', btnPaddingTop: '0', btnPaddingRight: '0', btnPaddingBottom: '0', btnPaddingLeft: '0', btnBorder: '0', btnFontFamily: 'Open Sans, Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '42', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Call-to-action'})
	        
	  //- Sample 2 Column Block 
	  +wrapper({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	  
	    +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	    
	      // 1st Column
	      +column({width: '284', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	      
	        +img({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg', imgWidth: '284'})
	        
	        +txt({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '28', fontWeight: 'bold', lineHeight: '28', fontColor: '#000000', txt: 'Lorem ipsum'})
	        
	        +txt({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis tristique interdum. In facilisis metus arcu, in eleifend felis vulputate auctor. Quisque congue pretium mauris a iaculis. Proin eget tempus nunc. Donec at est sapien.'})
	        
	        +btn({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#000000', btnPaddingTop: '0', btnPaddingRight: '0', btnPaddingBottom: '0', btnPaddingLeft: '0', btnBorder: '0', btnFontFamily: 'Open Sans, Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '42', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Call-to-action'})
	      
	      // Divider
	      +column({width: '32', mobileWidth: 'hide', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	      
	      // 2nd Column
	      +column({width: '284', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
	      
	        +img({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg', imgWidth: '284'})
	        
	        +txt({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '28', fontWeight: 'bold', lineHeight: '28', fontColor: '#000000', txt: 'Lorem ipsum'})
	        
	        +txt({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis tristique interdum. In facilisis metus arcu, in eleifend felis vulputate auctor. Quisque congue pretium mauris a iaculis. Proin eget tempus nunc. Donec at est sapien.'})
	        
	        +btn({width: '284', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#000000', btnPaddingTop: '0', btnPaddingRight: '0', btnPaddingBottom: '0', btnPaddingLeft: '0', btnBorder: '0', btnFontFamily: 'Open Sans, Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '42', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Call-to-action'})

Which should render to this:

![New Project](https://image.ibb.co/h09DDA/Newsletter-Builder-Sample.png)

This is your starting point.

## newProject.pug explained:

### Variables

	  - var color = {bg: '#FFFFFF', txt: '#000000', hlight: '#000000'};

The color variables define default colours used throughout your newsletter.

bg: background colours
txt: font colours
hlight: button colours



	  //- custom only supports fonts found on https://fonts.google.com/
	  - var font = {custom: [{name: 'Open Sans', weights: [400,700]}], default: 'Helvetica, sans-serif'}

The font variables define custom and default fonts used throughout your newsletter.

custom: name and weight of the google font
default: default font family and fallback

***Note that any variables can be overwritten on each component.***


### Tags and Options

***Tag List***

+wrapper
+row
+subRow
+column
+img
+video
+txt
+btn

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
| bulletproof | false | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}

    +wrapper({width: '600', bgColor: '#FFFFFF', bgSrc: 'https://www.placehold.it/600x400', bulletproof: 'true', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

**+row** // **+subRow**

| Option | Default Value| Description | Usage
|--|--|--|--|
| direction | rtl | Direction of element content | rtl, ltr

      +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

**+column**

| Option | Default Value| Description | Usage
|--|--|--|--|
| mobileWidth | none (scaling) | Length of column on mobile | 100%, 75%, 66%, 50%, 33%, 25%, 10%, hide (Hides on mobile)
| bgSrc | none | Background image source | Takes in URL as value
| bulletproof | false | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom

        +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

  **+vid**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| vidHref | # | Anchor path | Takes url as value
| vidTitle | title | Video alt text | takes text as value
| vidSrc | placeholder | Video source | Takes url as value
| vidImgSrc | placeholder | Fallback image source | Takes url as value
| vidWidth | none (scaling) | Image width | Takes natural numbers as value
| vidSrc | placeholder | Image source | Takes url as value
| responsive | none | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}

        +vid({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', vidHref: '', vidTitle: 'title', vidImgSrc: '', responsive: 'true', vidWidth: '600'})

---

  **+img**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| imgHref | # | Anchor path | Takes url as value
| imgTitle | title | Image alt text | takes text as value
| imgSrc | placeholder | Image source | Takes url as value
| imgWidth | none (scaling) | Image width | Takes natural numbers as value
| responsive | none | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}

          +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://www.placehold.it/600x400', imgWidth: '600'})

---

**+txt**

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

          +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum'})

---

**+btn**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| bulletproof | none | Adds support for border-radius on buttons on the Microsoft Outlook Email Client by using VML (Vector Markup Language). Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/  | ({bulletproof: 'true')}
| btnWidth | 200 | Button width | Takes natural number as value
| btnColor | #000000 | Button background color | Takes hex color codes as value
| btnPaddingTop | 0 | Button top padding | Takes natural number as value
| btnPaddingRight | 0 | Button right padding | Takes natural number as value
| btnPaddingBottom | 0 | Button bottom padding | Takes natural number as value
| btnPaddingLeft | 0 | Button left padding | Takes natural number as value
| btnBorder | 0 | Button border | Ex. 1px solid #000000
| btnFontFamily | Helvetica | Button font family | Takes font name as value
| btnFontSize | 14(px) | Button font size | Takes natural number as value
| btnFontWeight | normal | Button font weight | lighter, normal, bold, bolder
| btnLineHeight | 21(px) | Button line height | Takes natural number as value
| btnHref | # | Button anchor path | Takes URL as value
| btnTitle | title | Button title | Takes text as value
| btnTxtColor | #FFFFFF | Button text color | Takes hex color codes as value
| btnTxt | placeholder | Button actual text | Takes text as value

          +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#CC0000', btnPaddingTop: '8', btnPaddingRight: '16', btnPaddingBottom: '8', btnPaddingLeft: '16', btnBorder: '1px solid #FFFFFF', btnFontFamily: 'Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '21', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Lorem Ipsum'})

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
