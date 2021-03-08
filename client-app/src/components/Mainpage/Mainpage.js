import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useStore } from '../../stores/store';

const Mainpage = () => {
  const { eventStore } = useStore();

  useEffect(() => {
    eventStore.loadActivities();
  }, []);

  return (
    <Fragment>
      <Header as="h3" textAlign="center">
        VisitTampere API
      </Header>
      {eventStore.loading
        ? null
        : eventStore.events.map((result, index) => (
            <Card centered>
              <Image src="" wrapped ui={false} />
              <Card.Content>
                <Card.Header
                  dangerouslySetInnerHTML={{ __html: result.title }}
                ></Card.Header>
                <Card.Meta>
                  <p>
                    {String(Date(result.starttime)).slice(7, 16)}
                    {String(Date(result.endtime)).slice(7, 16) ===
                    String(Date(result.starttime)).slice(7, 16)
                      ? null
                      : ' - ' + String(Date(result.starttime)).slice(7, 16)}
                  </p>
                </Card.Meta>
                <Card.Description
                  dangerouslySetInnerHTML={{ __html: result.description }}
                ></Card.Description>
              </Card.Content>
              <Card.Content extra>
                {result.ticket_link && (
                  <div>
                    <Icon name="globe" />
                    <a href={result.ticket_link}>{result.ticket_link}</a>
                  </div>
                )}
                {result.contact_info.address && (
                  <div>
                    <Icon name="map pin" />
                    <p>{result.contact_info.address}</p>
                  </div>
                )}
              </Card.Content>
              <Button.Group>
                <Button content="Lisää seurantalistaan" color="green" />
                <Button content="Lisätietoja" color="blue" />
              </Button.Group>
            </Card>
          ))}
    </Fragment>
  );
};

export default observer(Mainpage);
