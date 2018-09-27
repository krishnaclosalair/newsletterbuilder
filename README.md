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

    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc backgroundTable" width="600">
      <tbody>
        <tr>
          <td align="center" bgcolor="#FFFFFF" class="w100pc" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0; background-size: auto; background-position: auto;" valign="top" width="600">
            <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" width="600">
              <tbody>
                <tr>
                  <td align="center" bgcolor="#FFFFFF" class="w100pc pH" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;" valign="top" width="600">
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" width="600">
                      <tbody>
                        <tr>
                          <th align="center" bgcolor="#FFFFFF" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;" valign="top" width="600">
                            <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="w100pc" width="600">
                              <tbody>
                                <tr>
                                  <td align="center" bgcolor="#FFFFFF" class="w100pc" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;" valign="top" width="600">
                                    <a href="#" style="text-decoration: none; border: 0; outline: 0;" target="_blank" title="title"><img alt="alt" border="0" src="https://www.placehold.it/600x400" style="display: block; border: none;" width="100%"></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" bgcolor="#FFFFFF" class="w100pc" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0; font-family: Helvetica, sans-serif; font-size: 14px; font-weight: 400; line-height: 21pxpx; color: #000000;" valign="top" width="600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</td>
                                </tr>
                                <tr>
                                  <td align="center" bgcolor="#FFFFFF" class="w100pc" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;" valign="top" width="600">
                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td align="center" bgcolor="#CC0000" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border: 0; font-family: Helvetica, sans-serif; font-size: 14px; font-weight: 400; line-height: 21px; color: #FFFFFF;" valign="middle">
                                            <a href="#" style="text-decoration: none; border: 0; outline: 0; color:#FFFFFF;" target="_blank" title="title">Lorem ipsum</a>
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

**+wrapper**

width - 600 by default. Width of the table. Value recalculated when left and right padding is added.
paddingTop - 0 by default. Top padding. 
paddingRight - 0 by default. Right padding.
paddingBottom - 0 by default. Bottom padding.
paddingLeft - 0 by default. Left padding.
bgColor - #FFFFFF by default. Background color. Takes hex color code as value.
bgSrc - None by default. Use images as background. Takes in URL as value. Ex. bgSrc: 'https://placehold.it/600x400'.
bulletproof (boolean) - False by default. If true, adds support for background images on the Microsoft Outlook Email Client by using VML's (Vector Markup Language) v:fill tag. Source: Stig Morten Myre (Campaign Monitor) - https://backgrounds.cm/ 

**+row**

TBC

**+column**

TBC

**+img**

TBC

**+txt**

TBC

**+btn**

