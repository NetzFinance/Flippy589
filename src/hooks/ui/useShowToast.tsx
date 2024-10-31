"use client";
import { ToastImage } from "@/components/ToastImage";
import { UseToastOptions, useToast } from "@chakra-ui/react";

export function useShowToast() {
  const toast = useToast();

  function showToast({
    title,
    description,
    status,
  }: {
    title: string;
    description: string;
    status: UseToastOptions["status"];
  }) {
    return toast({
      title,
      description,
      status,
      icon: <ToastImage />,
      duration: 6000,
      isClosable: true,
    });
  }

  return { showToast };
}
