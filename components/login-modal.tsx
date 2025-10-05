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
        startContent={<User size={16} />}
        variant="bordered"
        color="primary"
        onPress={onOpen}
      >
        Войти
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
