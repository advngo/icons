import { Collapse } from "antd";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const { Panel } = Collapse;

const Instructions: React.FC = () => {
	return <Collapse defaultActiveKey={['1']}>
		<Panel header="Adicionando um ícone .svg" key="1">
			<p>
				Para adicionar um ícone, basta nomea-lo como exemplo: <code>arrow-right-solid.svg</code>
			</p>
			<p>em seguida, salvar no caminho</p> <code>svgs/icons/solid</code> para solid ou <code>svgs/icons/outline</code> para outline.
			<p>depois disso, use o comando <code>yarn generate</code> isso irá gerar os componentes react para os novos svgs.</p>

			<SyntaxHighlighter language="bash">
				{`
yarn generate
#or
npm run generate
				`}
			</SyntaxHighlighter>
		</Panel>
		<Panel header="Usando um ícone .svg" key="2">
			<p>
				Instalação
			</p>
			<SyntaxHighlighter language="bash">
				{`
yarn add @advngo/icons
#or
npm i @advngo/icons
				`}
			</SyntaxHighlighter>
			<p>Exemplo</p>
			<SyntaxHighlighter language="typescript" style={docco}>
				{`
import React from 'react';
import SvgArrowRightSolid from "@advngo/icons/solid/ArrowRightSolid";

const SomeComponent: React.FC = () => {
	return <SvgArrowRightSolid />
})

//or

const SomeComponent: React.FC = () => {
	return <SvgArrowRightSolid width={24} height={24} />
})
				`}
			</SyntaxHighlighter>
		</Panel>
	</Collapse>;
}

export default Instructions