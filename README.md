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

	<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc backgroundTable" data-component="wrapper" role="presentation" style="width: 600px; height: auto;" width="600">
		<tbody>
			<tr>
				<td bgcolor="#FFFFFF" class="w100pc" data-component="wrapper" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; width: 600px;" valign="top">
					<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" data-component="row" role="presentation" style="width: 600px;" width="600">
						<tbody>
							<tr>
								<td align="center" bgcolor="#FFFFFF" class="w100pc pH" data-component="row" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; width: 600px;" valign="top" width="600">
									<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" data-component="row" dir="ltr" role="presentation" style="width: 600px;" width="600">
										<tbody>
											<tr>
												<th align="center" bgcolor="#FFFFFF" data-component="column" dir="ltr" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; width: 600px;" valign="top" width="600">
													<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" data-component="column" role="presentation" style="width: 600px;" width="600">
														<tbody>
															<tr>
																<td align="center" bgcolor="#FFFFFF" class="w100pc" data-component="img" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; width: 600px;" valign="top" width="600">
																	<a href="#" style="text-decoration: none; border: 0; outline: 0;" target="_blank"><img alt="alt" border="0" class="w100pc hauto" src="http://placehold.jp/600x400.jpg" style="display: block; border: none; width: 600px;" width="600"></a>
																</td>
															</tr>
															<tr>
																<td align="center" bgcolor="#FFFFFF" class="w100pc" data-component="txt" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; font-family: Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 21px; color: #000000; width: 600px;" valign="top" width="600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</td>
															</tr>
															<tr>
																<td align="center" bgcolor="#FFFFFF" class="w100pc" data-component="btn" style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;width: 600px;" valign="top" width="600">
																	<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" data-component="btn" role="presentation" style="width: 200px;" width="200">
																		<tbody>
																			<tr>
																				<td align="center" bgcolor="#000000" data-component="btn" style="padding-top: 14px; padding-right: 0; padding-bottom: 14px; padding-left: 0; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; font-family: Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 14px; color: #FFFFFF; width: 200px;" valign="top" width="200">
																					<a href="#" style="text-decoration: none; color:#FFFFFF;" target="_blank"><span style="color: #FFFFFF; font-family: Helvetica, sans-serif; font-size: 14px; font-weight: normal;">Call-to-action</span></a>
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

Inside you'll find code that looks something like this:
	 
	// ########## 1 COLUMN BLOCK ##########
	+wrapper({customClass: '', width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '32', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
  
	    +row({width:  '600', direction:  'ltr', bgColor:  '#FFFFFF', paddingTop:  '0', paddingRight:  '0', paddingBottom:  '0', paddingLeft:  '0', borderTop:  '0', borderRight:  '0', borderBottom:  '0', borderLeft:  '0'})
    
	      +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
      
	        +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgAlt: 'alt', responsive: 'true', imgSrc: ''})
        
	        +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '28', fontWeight: 'bold', lineHeight: '28', fontColor: '#000000', txt: 'Heading'})
        
	        +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis tristique interdum. In facilisis metus arcu, in eleifend felis vulputate auctor. Quisque congue pretium mauris a iaculis. Proin eget tempus nunc. Donec at est sapien.'})
        
	        +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnBorderRadius: '20', btnHeight: '42', btnWidth: '200', btnColor: '#000000', btnBorder: '0', btnFontFamily: 'Open Sans, Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnHref: '#', btnTxtColor: '#FFFFFF', btnTxt: 'Call-to-action'}) 

The entire thing renders to this:

![Newsletter Builder](https://i.ibb.co/PZwgdhZ/Newsletter-Builder.png)

This is going to be your starting point.

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
| vidAlt | alt | Video alt text | takes text as value
| vidSrc | placeholder | Video source | Takes url as value
| vidImgSrc | placeholder | Fallback image source | Takes url as value
| vidWidth | none (scaling) | Image width | Takes natural numbers as value
| vidSrc | placeholder | Image source | Takes url as value
| responsive | none | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}

        +vid({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', vidHref: '', vidAlt: 'alt', vidImgSrc: '', responsive: 'true', vidWidth: '600'})

---

  **+img**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| imgHref | # | Anchor path | Takes url as value
| imgAlt | alt | Image alt text | takes text as value
| imgSrc | placeholder | Image source | Takes url as value
| responsive | none | Images take the width of its container and sets height to adjust accordingly | ({responsive: 'true')}

          +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgAlt: 'alt', responsive: 'true', imgSrc: ''})

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

          +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '16', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Open Sans, Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum'})

---

**+btn**

| Option | Default Value| Description | Usage
|--|--|--|--|
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom
| bulletproof | none | Adds support for border-radius on buttons on the Microsoft Outlook Email Client by using VML (Vector Markup Language). Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/  | ({bulletproof: 'true')}
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