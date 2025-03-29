"use client";

import { title } from "@/components/primitives";
import { Avatar, Spacer } from "@heroui/react";
import { accounts } from "@/components/data/accounts";
import { Link } from "@heroui/link";

export default function AccountsPage() {
  return (
    <div>
      <h1 className={title()}>Accounts</h1>
      <Spacer y={8} />
      <div className="flex mx-[10%] justify-center">
        <div className="flex gap-6 justify-center flex-wrap w-[55%]">
          {accounts.map((account) => (
            <Link
              isExternal
              key={account.service}
              color="foreground"
              className="flex flex-col items-center"
              href={account.url}
            >
              <Avatar
                isBordered
                radius="sm"
                className="w-20 h-20 text-large p-1 m-1 bg-default-500"
                src={`/accounts/${account.image}`}
              />
              <p>{account.service}</p>
              <p>({account.userId})</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
