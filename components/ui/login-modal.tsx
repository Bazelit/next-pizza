"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { User } from "lucide-react";

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="bordered"
        color="primary"
        onPress={onOpen}
        isIconOnly
        className="md:hidden"
      >
        <User size={16} />
      </Button>
      <Button
        variant="bordered"
        color="primary"
        onPress={onOpen}
        className="max-md:hidden"
      >
        <User size={16} />
        <span>Войти</span>
      </Button>
      <Modal isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Войти</ModalHeader>
              <ModalBody>
                <Input
                  label="Электронная почта"
                  color="primary"
                  type="email"
                  placeholder="Введите свою электронную почту"
                  variant="bordered"
                />
                <Input
                  label="Пароль"
                  color="primary"
                  placeholder="Введите свой пароль"
                  type="password"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
                <Button color="primary" onPress={onClose}>
                  Войти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
