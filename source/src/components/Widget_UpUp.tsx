import UpUp from '@/services/upup_service';
import { Col, ColorPicker, Divider, Row, Space } from 'antd';
import { Color } from 'antd/es/color-picker';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';

export default function Widget_UpUp() {
	const [content, setContent] = useState('');
	const divRef = React.createRef<HTMLDivElement>();
	const [bgColor, setBgColor] = useState<string>('#00000000');
	const [textColor, setTextColor] = useState<string>('#42240f');
	const upupInstance = useRef<UpUp | undefined>();

	useEffect(() => {
		if (!divRef.current) return;
		if (!upupInstance.current) {
			upupInstance.current = new UpUp(divRef.current);
		}
		upupInstance.current.beginDrag(content, bgColor, textColor);
	}, [content, bgColor, textColor]);

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<TextArea
					placeholder="举牌文字"
					style={{ width: '60%', marginRight: 20 }}
					value={content}
					onChange={e => {
						setContent(e.target.value);
					}}
					allowClear
					autoSize
				/>

				<Row align="middle">
					<Space>
						<Col>背景颜色:</Col>
						<Col>
							<ColorPicker
								format={'rgb'}
								value={bgColor}
								onChange={(value: Color, hex: string) => {
									setBgColor(hex);
								}}
							/>
						</Col>
					</Space>
					<Space style={{ marginLeft: 20 }}>
						<Col>文本颜色:</Col>
						<Col>
							<ColorPicker
								format={'rgb'}
								value={textColor}
								onChange={(value: Color, hex: string) => {
									setTextColor(hex);
								}}
							/>
						</Col>
					</Space>
				</Row>
			</div>

			<Divider />

			<div ref={divRef} style={{ overflow: 'auto' }}></div>
		</>
	);
}
