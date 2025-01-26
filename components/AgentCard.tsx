import { auth } from "@/auth";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Agent, Owner } from "@/sanity/types";

export type AgentTypeCard = Omit<Agent, "owner"> & { owner?: Owner };

const AgentCard = ({ post }: { post: AgentTypeCard }) => {
  const { title, description, image, category, views, owner, _createdAt, _id } =
    post;
  return (
    <li className="agent-card group">
      <div className="flex-between">
        <p className="agent_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${owner?._id}`}>
            <p className="text-16-semibold text-primary">{owner?.name}</p>
          </Link>
          <Link href={`/agent/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${owner?._id}`}>
          <Image
            src={owner?.image!}
            alt={owner?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/agent/${_id}`}>
        <p className="agent-card-desc">{description}</p>
        <img src={image} alt="placeholder" className="agent-card-img" />
      </Link>
      <div className="flex-between mt-5 gap-3">
        <p className="agent-card-category">{category}</p>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="agent-card_btn" asChild>
          <Link href={`/agent/${_id}`}>Read More</Link>
        </Button>
      </div>
      "
    </li>
  );
};

export default AgentCard;
