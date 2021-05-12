import { ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('coc-haiku');
  const isEnable = config.get<boolean>('enable', true);
  if (!isEnable) {
    return;
  }
  const serverOptions = {
    command: 'haiku-language-server', // run hls
  };
  const clientOptions = {
    documentSelector: ['haiku'], // run hls on haiku files
  };
  const client = new LanguageClient(
    'coc-haiku', // the id
    'coc-haiku', // the name of the language server
    serverOptions,
    clientOptions
  );
  context.subscriptions.push(services.registLanguageClient(client));
}
