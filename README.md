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
    
    
## How to use:

### Tags and Options:

***GENERAL OPTIONS***

  width - 600 by default. Set to 'full' for 100%. Width of the container.

  bgColor - #FFFFFF by default. Takes hex color code as value.

  paddingTop - 0 by default.

  paddingRight - 0 by default.

  paddingBottom - 0 by default.

  paddingLeft - 0 by default.

  borderTop - 0 by default.

  borderRight - 0 by default.

  borderBottom - 0 by default.

  borderLeft - 0 by default.


**+wrapper**

  bgSrc - None by default. Use images as background. Takes in URL as value.

  bulletproof - Not enabled by default. If set ({bulletproof: 'true')}, adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ 


**+row**

General


**+column**

  mobileWidth - Length of column on mobile. Options: 100%, 75%, 66%, 50%, 33%, 25%, 10%, hide (Hide on mobile)

  align - center by default.

  valign - top by default.


  **+img**

  align - center by default.

  valign - top by default.

  imgHref - Image link.

  imgTitle - Image alt text/link title.

  responsive - Images retain their width by default. If set ({responsive: 'true')}, makes images take the width of it's container and sets height to adjust accordingly.

  imgSrc

  imgWidth


**+txt**

  align - center by default.

  valign - top by default.

  fontFamily - Helvetica by default.

  fontSize - 14px by default.

  fontWeight - normal by default. 

  lineHeight - 21px by default.

  fontColor - #000000 by default.

  txt - Text output.


**+btn**

  align - center by default.

  valign - top by default.

  bulletproof - Not enabled by default. If set ({bulletproof: 'true')}, adds support for border-radius on buttons on the Microsoft Outlook Email Client by using VML (Vector Markup Language). Source: Stig Morten Myre of Campaign Monitor - https://backgrounds.cm/ 

  btnWidth - 200px by default. Width of the button.

  btnColor - #000000 by default. Background color of the button.

  btnPaddingTop

  btnPaddingRight

  btnPaddingBottom

  btnPaddingLeft

  btnBorder

  btnFontFamily - Helvetica by default.

  btnFontSize - 14px by default.

  btnFontWeight - normal by default.

  btnLineHeight - 21px by default.

  btnHref

  btnTitle

  btnTxtColor - #FFFFFF by default.

  btnTxt - Text on button.



***NOTE: Unit expression not recessary. (14 instead of 14px)***


## Example:

    +wrapper({width: '600', bgColor: '#FFFFFF', bgSrc: 'https://www.placehold.it/600x400', bulletproof: 'true', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

      +row({width: '600', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

        +column({width: '600', mobileWidth: '100%', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0'})

          +img({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', imgHref: '#', imgTitle: 'title', responsive: 'true', imgSrc: 'https://www.placehold.it/600x400', imgWidth: '600'})

          +txt({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', fontFamily: 'Helvetica, sans-serif', fontSize: '14', fontWeight: 'normal', lineHeight: '21', fontColor: '#000000', txt: 'Lorem ipsum'})

          +btn({width: '600', align: 'center', valign: 'top', bgColor: '#FFFFFF', paddingTop: '0', paddingRight: '0', paddingBottom: '0', paddingLeft: '0', borderTop: '0', borderRight: '0', borderBottom: '0', borderLeft: '0', bulletproof: 'true', btnWidth: '200', btnColor: '#CC0000', btnPaddingTop: '8', btnPaddingRight: '16', btnPaddingBottom: '8', btnPaddingLeft: '16', btnBorder: '1px solid #FFFFFF', btnFontFamily: 'Helvetica, sans-serif', btnFontSize: '14', btnFontWeight: 'normal', btnLineHeight: '21', btnHref: '#', btnTitle: 'title', btnTxtColor: '#FFFFFF', btnTxt: 'Lorem Ipsum'})