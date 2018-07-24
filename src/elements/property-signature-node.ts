import * as ts from "typescript";
import { ElementNode } from "./element-node";
import { WriteModifier } from "./write-modifier";

export class PropertySignatureNode extends ElementNode
{
	public writeMode: WriteModifier = WriteModifier.Writable;

	constructor(sourceFile: ts.SourceFile, propertyDeclaration: ts.PropertySignature)
	{
		super();

		this.name = (<ts.Identifier>propertyDeclaration.name).escapedText.toString();

		this.fullStart = propertyDeclaration.getFullStart();
		this.end = propertyDeclaration.getEnd();
		this.start = propertyDeclaration.getStart(sourceFile, false);

		this.accessModifier = this.getAccessModifier(propertyDeclaration);
		this.writeMode = this.getWriteMode(propertyDeclaration);
	}
}