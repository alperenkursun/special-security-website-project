import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tfoot,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import moment from "moment/moment";

function AnnouncementAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [announcements, setAnnouncements] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateValue, setUpdateValue] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
      });
  }, []);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div className={styles.color}>
      <TableContainer bg="white">
        <Table variant="simple">
          <TableCaption fontWeight="800">
            Duyurular Yönetim Tablosu
          </TableCaption>
          <Thead>
            <Tr>
              <Th color="black" fontSize="medium" fontWeight="800">
                Başlık
              </Th>
              <Th color="black" fontSize="medium" fontWeight="800">
                AÇIKLAMA
              </Th>
              <Th color="black" fontSize="medium" fontWeight="800">
                TARİH
              </Th>
              <Th isNumeric color="white">
                <button
                  className={styles.crudButton}
                  style={{ backgroundColor: "green" }}
                  onClick={() => {
                    setIsUpdate(false);
                    onOpen();
                    return "null";
                  }}
                >
                  DUYURU EKLE
                </button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {announcements
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <Tr key={item._id}>
                    <Td>
                      {item.title.length > 8
                        ? `${item.title.slice(0, 8)}...`
                        : item.title}
                    </Td>
                    <Td>
                      {" "}
                      {item.description.length > 50
                        ? `${item.description.slice(0, 50)}...`
                        : item.description}
                    </Td>
                    <Td>
                      {" "}
                      {moment(item.createAt).format("DD-MM-YYYY, HH:mm")}
                    </Td>

                    <Th isNumeric color="white" cursor="pointer">
                      <button
                        className={styles.crudButton}
                        style={{ backgroundColor: "blue" }}
                        onClick={() => {
                          setUpdateValue({
                            id: item._id,
                            title: item.title,
                            description: item.description,
                          });
                          setIsUpdate(true);
                          onOpen();
                        }}
                      >
                        DUYURUYU GÜNCELLE
                      </button>
                      <a
                        href={`${process.env.REACT_APP_SERVER_URL}/delete/${item._id}?_method=DELETE`}
                        className={styles.crudButton}
                        style={{ backgroundColor: "red" }}
                      >
                        DUYURUYU SİL
                      </a>
                    </Th>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th color="black" fontSize="medium" fontWeight="800">
                Başlık
              </Th>
              <Th color="black" fontSize="medium" fontWeight="800">
                Açıklama
              </Th>
              <Th color="black" fontSize="medium" fontWeight="800">
                TARİH
              </Th>
              <Th isNumeric color="black" fontSize="medium" fontWeight="800">
                EKLE/DÜZENLE/SİL
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      //Add Model
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isUpdate ? "Duyuruyu Güncelle" : "Duyuru Ekle"}
          </ModalHeader>
          <ModalCloseButton />
          <form
            method="POST"
            action={
              isUpdate
                ? `${process.env.REACT_APP_SERVER_URL}/update/${updateValue.id}?_method=PUT`
                : `${process.env.REACT_APP_SERVER_URL}/add`
            }
          >
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Duyuru Başlığı</FormLabel>
                <Input
                  name="title"
                  ref={initialRef}
                  placeholder="Başlık"
                  value={isUpdate ? updateValue.title : null}
                  onChange={(e) =>
                    isUpdate
                      ? setUpdateValue({
                          ...updateValue,
                          title: e.target.value,
                        })
                      : null
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Duyuru Açıklaması</FormLabel>

                <Textarea
                  name="description"
                  placeholder="Açıklama"
                  value={isUpdate ? updateValue.description : null}
                  onChange={(e) =>
                    isUpdate
                      ? setUpdateValue({
                          ...updateValue,
                          description: e.target.value,
                        })
                      : null
                  }
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" mr={3}>
                {isUpdate ? "Güncelle" : "Ekle"}
              </Button>
              <Button onClick={onClose}>Kapat</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AnnouncementAdmin;
