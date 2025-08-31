import { Doc } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { Hint } from "@workspace/ui/components/hint";
import { ArrowRightIcon, ArrowUpIcon, CheckIcon } from "lucide-react";

interface ConversationStatusButtonProps {
  status: Doc<"conversations">["status"];
  onClick: () => void;
  disabled?: boolean;
}

export const ConversationStatusButton = ({
  status,
  onClick,
  disabled,
}: ConversationStatusButtonProps) => {
  if (status === "resolved") {
    return (
      <Hint text="Mark as unresolved">
        <Button
          disabled={disabled}
          onClick={onClick}
          size="sm"
          variant="tertiary"
        >
          <CheckIcon />
          Resolved
        </Button>
      </Hint>
    );
  }

  if (status === "escalated") {
    return (
      <Hint text="Mark as Resolved">
        <Button
          disabled={disabled}
          onClick={onClick}
          size="sm"
          variant="warning"
        >
          <ArrowUpIcon />
          Escalated
        </Button>
      </Hint>
    );
  }

  return (
    <Hint text="Mark as Escalated">
      <Button
        disabled={disabled}
        onClick={onClick}
        size="sm"
        variant="destructive"
      >
        <ArrowRightIcon />
        Unresolved
      </Button>
    </Hint>
  );
};
