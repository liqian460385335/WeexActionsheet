//
//  CDDActionSheetModule.m
//  LQWeexModuleDemo
//
//  Created by liqian on 2018/3/20.
//  Copyright © 2018年 liqian. All rights reserved.
//

#import "CDDActionSheetModule.h"
#import "FDActionSheet.h"
#import "UIColor+Hex.h"
@interface CDDActionSheetModule()<FDActionSheetDelegate>
{
    FDActionSheet *sheet;
    WXModuleCallback back;
}
@end
@implementation CDDActionSheetModule
//@synthesized weexInstance，每个moudle对象被绑定到一个指定的实例上

@synthesize weexInstance;

//必须添加宏WX_EXPORT_METHOD, 它可以被weex识别，它的参数是 JavaScript调用 module指定方法的参数
WX_EXPORT_METHOD(@selector(show))
WX_EXPORT_METHOD(@selector(hide))
WX_EXPORT_METHOD(@selector(initWithTitle: cancel: otherTitle: callback:))
WX_EXPORT_METHOD(@selector(setTitleColor:font:))
WX_EXPORT_METHOD(@selector(setCancelButtonTitleColorOrbgColorOrfont:))
WX_EXPORT_METHOD(@selector(setButtonIndexTitleColorOrbgColorOrfontOrIndex:))

- (void)initWithTitle:(NSString *)title cancel:(NSString *)cancel otherTitle:(NSArray *)otherTitle callback:(WXModuleCallback)callback{
    back = callback ;
    sheet = [[FDActionSheet alloc] initWithTitle:title delegate:self cancelButtonTitle:cancel otherButtonTitles:otherTitle];
    [sheet show];
    
}

- (void)actionSheet:(FDActionSheet *)sheet clickedButtonIndex:(NSInteger)buttonIndex{
    
    NSString * index = [NSString stringWithFormat:@"%ld",(long)buttonIndex];
    back(index);
}

/*显示控件*/
- (void)show{
    
    [sheet show];
}

- (void)hide{
    
    [sheet hide];
}

- (void)setTitleColor:(NSString *)color font:(CGFloat)font{
    
    [sheet setTitleColor:[UIColor colorWithHexString:color] fontSize:font];
}

- (void)setCancelButtonTitleColorOrbgColorOrfont:(NSDictionary*)key{
    
    if ([key isKindOfClass:[NSDictionary class]]) {
        
        UIColor * ccolor = key[@"color"] == nil ? nil :[UIColor colorWithHexString:key[@"color"]];
        CGFloat font = [key[@"font"] floatValue];
        UIColor * bbgcolor = key[@"bgcolor"]==nil ? nil :[UIColor colorWithHexString:key[@"bgcolor"]];
        
        [sheet setCancelButtonTitleColor:ccolor bgColor:bbgcolor fontSize:font];

    }
    
}

- (void)setButtonIndexTitleColorOrbgColorOrfontOrIndex:(NSDictionary *)dic{
    
    if ([dic isKindOfClass:[NSDictionary class]]) {
        UIColor * titleColor = dic[@"titleColor"] == nil ? nil : [UIColor colorWithHexString:dic[@"titleColor"]];
        UIColor * bgColor = dic[@"bgColor"] == nil ? nil : [UIColor colorWithHexString:dic[@"bgColor"]];
        CGFloat font = [dic[@"font"] floatValue];
        NSInteger index = [dic[@"index"] integerValue];
        [sheet setButtonTitleColor:titleColor bgColor:bgColor fontSize:font atIndex:index];
    }
    
}


@end
