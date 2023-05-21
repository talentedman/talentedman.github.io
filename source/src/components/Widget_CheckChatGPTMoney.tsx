import { Button, Divider, Table, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

async function _requestApiInfo(apiKey: string) {
	if (!apiKey) {
		message.error('缺少API密钥');
		return;
	}
	apiKey = apiKey.trim();
	const queryUrl = 'https://api.openai.com/dashboard/billing/subscription';
	const headers = {
		'User-Agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64',
		Authorization: `Bearer ${apiKey}`,
		Accept: '*/*',
		Host: 'api.openai.com',
		Connection: 'keep-alive',
	};

	try {
		const response = await fetch(queryUrl, { headers });
		const data = await response.json();

		if (data.error) {
			message.error(data.error.message || JSON.stringify(data));
			return;
		}

		const formatDate = (d: Date) =>
			`${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
				.getDate()
				.toString()
				.padStart(2, '0')}`;
		const startDate = formatDate(
			new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
		);
		const endDate = formatDate(
			new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
		);

		const usageResponse = await fetch(
			`https://api.openai.com/dashboard/billing/usage?start_date=${startDate}&end_date=${endDate}`,
			{ headers }
		);
		const usageData = await usageResponse.json();
		const used = usageData.total_usage
			? (Math.round(usageData.total_usage) / 100).toFixed(2)
			: 0;
		const subscription = data.hard_limit_usd
			? (Math.round(data.hard_limit_usd * 100) / 100).toFixed(2)
			: 0;

		data.apiKey = apiKey;
		data.used = used;
		data.subscription = subscription;
		data.remaining = (Number(subscription) - Number(used)).toFixed(2);
		data.expirationDate = new Date(data.access_until * 1000).toLocaleString();
		data.isBindCard = data.has_payment_method ? '已绑卡' : '未绑卡';
		data.system_hard_limit_usd = data.system_hard_limit_usd.toFixed(2);

		return data;
	} catch (err: any) {
		message.error(err);
		return;
	}
}

export default function Widget_CheckChatGPTMoney() {
	const [apiKey, setApiKey] = useState('');
	const [tableData, setTableData] = useState<any[] | null>();
	const [buttonLoading, setButtonLoading] = useState(false);

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<TextArea
					placeholder="sk-xxx"
					style={{ width: '60%', marginRight: 20 }}
					value={apiKey}
					onChange={e => {
						setApiKey(e.target.value);
					}}
					allowClear
					disabled={buttonLoading}
				/>
				<Button
					type="primary"
					loading={buttonLoading}
					onClick={async () => {
						setTableData(null);
						setButtonLoading(true);
						const keyList = apiKey.split('\n');
						for (let i = 0; i < keyList.length; i++) {
							const skKey = keyList[i];
							const data = await _requestApiInfo(skKey);
							if (data) {
								setTableData(preData => {
									if (preData) {
										return [data, ...preData];
									} else {
										return [data];
									}
								});
							}
						}
						setButtonLoading(false);
					}}
				>
					点击查询
				</Button>
			</div>

			<Divider />

			{!tableData ? null : (
				<Table
					columns={[
						{
							title: '有效期至',
							dataIndex: 'apiKey',
						},
						{
							title: '有效期至',
							dataIndex: 'expirationDate',
						},
						{
							title: '账户名称',
							dataIndex: 'account_name',
						},
						{
							title: '是否绑卡',
							dataIndex: 'isBindCard',
						},
						{
							title: '已消费额度',
							dataIndex: 'used',
						},
						{
							title: '剩余额度',
							dataIndex: 'remaining',
						},
						{
							title: '账户额度',
							dataIndex: 'subscription',
						},
					]}
					dataSource={tableData}
					bordered
					pagination={false}
					size="small"
					scroll={{
						y: 700,
					}}
				/>
			)}
		</>
	);
}
