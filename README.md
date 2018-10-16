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
          <td class="w100pc zwrapper" width="600" align="center" valign="top" bgcolor="#FFFFFF" background="none" style="padding-top: 0px;        padding-right: 0px;        padding-bottom: 0px;        padding-left: 0px;        border-top: 0;        border-right: 0;        border-bottom: 0;        border-left: 0;        background-size: auto;        background-position: auto;        width: 600px;">
            <table class="w100pc zrow" width="600" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
              <tbody>
                <tr>
                  <td class="w100pc zrow pH" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;        padding-right: 0px;        padding-bottom: 0px;        padding-left: 0px;        border-top: 0;        border-right: 0;        border-bottom: 0;        border-left: 0;        width: 600px;">
                    <table class="w100pc zrow" width="600" dir="ltr" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
                      <tbody>
                        <tr>
                          <th class="zcolumn" width="600" dir="ltr" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;  padding-right: 0px;  padding-bottom: 0px;  padding-left: 0px;  border-top: 0;  border-right: 0;  border-bottom: 0;  border-left: 0;  width: 600px;">
                            <table class="w100pc zcolumn" width="600" align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" border="0" style="width: 600px;">
                              <tbody>
                                <tr>
                                  <td class="w100pc" width="600" align="center" valign="top" bgcolor="#FFFFFF" style="padding-top: 0px;    padding-right: 0px;    padding-bottom: 0px;    padding-left: 0px;    border-top: 0;    border-right: 0;    border-bottom: 0;    border-left: 0;    width: 600px;"><a href="#" target="_blank" title="title" style="text-decoration: none; border: 0; outline: 0;"><img src="https://www.placehold.it/600x400" alt="alt" width="600" border="0" style="display: block; border: none; width: 600px;" /></a>
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

### Installation:
1.) Install Node.js (https://nodejs.org/en/)
2.) Make sure you have git (https://git-scm.com/)
3.) Using the command line, clone this repository and navigate to it.

		git clone https://github.com/krishnaclosalair/newsletterbuilder.git
		cd newsletterbuilder
		
4.) Install dependencies.
			
		npm install
		
5.) Install Gulp and Gulp for Pug

		npm install gulp --save-dev
		npm install gulp-pug --save-dev
		
6.) Run Gulp

		node_modules/.bin/gulp

After this point, any .pug files saved/updated under the src folder should render as .html on the dist folder.


### Your first project:

1.) Copy the newProject.pug file found in the src folder within the newsletterbuilder.

2.) Open that new file.

It should look like this: 

		extends template.pug

		block vars

		  - var color = {bg: '#FFFFFF', txt: '#000000', hlight: '#000000'};
		  
		block content

		  //- Start Here  
		  +wrapper({width: '600', bgColor: '#FFFFFF', bgSrc: 'https://www.placehold.it/600x400', bulletproof: 'true', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
  
		    +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
    
		      +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})
		      
		        +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://www.placehold.it/600x400', imgWidth: '600'})
		        
		        +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum'})
		        
		        +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#CC0000', btnPaddingTop: '8', btnPaddingRight: '16', btnPaddingBottom: '8', btnPaddingLeft: '16', btnBorder: '1px solid #FFFFFF', btnFontFamily: 'Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '21', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Lorem Ipsum'})

3.) TBC


### Tags and Options:

***General Options***

| Option | Default Value| Description | Usage
|--|--|--|--|
| width  | 600(px) | Container Width | Takes natural numbers as value. Set to 'full' for 100%.
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
| bgSrc | none | Background image source | Takes in URL as value
| bulletproof | false | Adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ | ({bulletproof: 'true')}

    +wrapper({width: '600', bgColor: '#FFFFFF', bgSrc: 'https://www.placehold.it/600x400', bulletproof: 'true', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

**+row**

Refer to general options.

      +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

---

**+column**

| Option | Default Value| Description | Usage
|--|--|--|--|
| mobileWidth | none (scaling) | Length of column on mobile | 100%, 75%, 66%, 50%, 33%, 25%, 10%, hide (Hides on mobile)
| align | center | Horizontal alignment | left, center, right
| valign | top | Vertical alignment | top, middle, bottom

        +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

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
| btnFontWeight | normal |  | lighter, normal, bold, bolder
| btnLineHeight | 21(px) |  | Takes natural number as value
| btnHref | # | Button anchor path | Takes URL as value
| btnTitle | title | Button title | Takes text as value
| btnTxtColor | #FFFFFF | Button text color | Takes hex color codes as value
| btnTxt | placeholder | Button actual text | Takes text as value

          +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#CC0000', btnPaddingTop: '8', btnPaddingRight: '16', btnPaddingBottom: '8', btnPaddingLeft: '16', btnBorder: '1px solid #FFFFFF', btnFontFamily: 'Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '21', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Lorem Ipsum'})

---

***NOTE: Unit expression not recessary. (Use 14 instead of 14px)***