"use client";

import { logout } from "@/actions/logout";
import { LogOut } from "react-feather";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function LogoutButton() {
  const { t } = useTranslation();

  const handleLogout = async () => {
    await logout();
    toast.success("Ви вийшли з акаунту");
  };

  return (
    <button
      className="inline-flex items-center justify-center rounded-md bg-gray-300/20 px-4 py-2 text-md font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      onClick={handleLogout}
    >
      <span>{t("logout")}</span>
      <LogOut className="ml-2 h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default LogoutButton;
