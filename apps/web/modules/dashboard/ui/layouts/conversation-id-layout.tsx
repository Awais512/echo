import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";

export const ConversationIdLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ResizablePanelGroup className="h-full flex-1" direction="horizontal">
      <ResizablePanel className="h-full" defaultSize={60}>
        <div className="flex flex-col h-full flex-1">{children}</div>
      </ResizablePanel>
      <ResizableHandle className="hidden lg:block" />
      <ResizablePanel className="hidden lg:block" defaultSize={40} maxSize={40}>
        <div>Contact Panel</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
