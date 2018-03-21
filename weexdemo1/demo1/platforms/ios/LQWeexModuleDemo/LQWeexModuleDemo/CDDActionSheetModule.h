//
//  CDDActionSheetModule.h
//  LQWeexModuleDemo
//
//  Created by liqian on 2018/3/20.
//  Copyright © 2018年 liqian. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>
#import <WeexSDK/WXModuleProtocol.h>
@interface CDDActionSheetModule : NSObject<WXModuleProtocol>

/*
 * 名 称: initWithTitle
 * 功 能: actionSheet模块初始化
 * 参 数: title(标题)
 *       cancel(取消按钮名称)
 *       otherTitle(其他按钮名称)
 *       callback(选择回调)
 * 返 回 值:
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)initWithTitle:(NSString *)title cancel:(NSString *)cancel otherTitle:(NSArray *)otherTitle callback:(WXModuleCallback)callback;

/*
 * 名 称: show
 * 功 能: 显示actionSheet模块方法
 * 参 数:
 * 返 回 值:
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)show;

/*
 * 名 称: hide
 * 功 能: 隐藏actionSheet模块方法
 * 参 数:
 * 返 回 值:
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)hide;

/*
 * 名 称: setTitleColor
 * 功 能: 设置标题的字体颜色与字体大小
 * 参 数: color(字体颜色)
 * 返 回 值: 应答消息帧的长度
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)setTitleColor:(NSString *)color font:(CGFloat)font;

/*
 * 名 称: setButtonTitleColor
 * 功 能: 设置其他某一个按钮的字体颜色与字体大小，按钮背景色
 * 参 数: color bgColor font index
 * 返 回 值:
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)setButtonIndexTitleColorOrbgColorOrfontOrIndex;

/*
 * 名 称: setCancelButtonTitleColor
 * 功 能: 设置取消按钮的字体颜色与字体大小，按钮背景色
 * 参 数: color bgColor fontSize
 * 返 回 值:
 * 修 改: 新生成函数 李乾 2018/3/21
 */
- (void)setCancelButtonTitleColorOrbgColorOrfont:(NSDictionary*)key;

@end
