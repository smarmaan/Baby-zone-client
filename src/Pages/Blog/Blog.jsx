import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("BABY ZONE | BLOG");

  return (
    <>
      <main className="mt-5 w-[95%] md:w-[70%] font-Cambria text-[#0a4d7b]  bg-blue-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
        {/* 


             */}

        <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
          <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?{" "}
          </h1>

          <p className="text-justify  md:text-center text-cyan-800 font-medium mb-7 pb-10 p-5">
            An access token and refresh token are commonly used in
            authentication and authorization systems. Here is a breakdown of
            what they are, how they work, and where you should store them on the
            client-side:
            <br /> <br />{" "}
            <strong className="font-bold text-lg text-red-800">
              {" "}
              Access Token:{" "}
            </strong>
            <br />
            An access token is a credential that is used to authenticate and
            authorize a client to access protected resources on a server. It is
            usually a string of characters that represents the permissions and
            identity of the client. Access tokens are typically short-lived and
            have an expiration time. They are issued by an authentication server
            (like OAuth or OpenID Connect) after the client successfully
            authenticates and authorizes itself.
            <br /> <br />
            <strong className="font-bold text-lg text-red-800">
              Refresh Token:
            </strong>
            <br />
            A refresh token is a long-lived credential that is used to obtain a
            new access token without re-authenticating the client. It is issued
            alongside the access token and is typically valid for a longer
            period than the access token. The refresh token is used to request a
            new access token when the current one expires.
            <br />
            <br />
            <p className="text-2xl font-bold underline text-red-800">
              {" "}
              Here is how the access token and refresh token flow works:
            </p>
            <div className="text-left">
              <br /> <br />
              <p className="font-bold underline text-red-800">
                Client requests authentication:
              </p>
              <br /> The client sends credentials (e.g., username and password)
              to the authentication server.
              <br /> <br />
              <p className="font-bold underline text-red-800">
                {" "}
                Authentication and authorization:{" "}
              </p>
              <br />
              The authentication server verifies the credentials, and if they
              are valid, it generates an access token and a refresh token. The
              access token contains information about the clients permissions
              and the refresh token allows the client to obtain a new access
              token.
              <br /> <br />
              <p className="font-bold underline text-red-800">
                Accessing protected resources:{" "}
              </p>
              <br />
              The client includes the access token in each subsequent request to
              the server to access protected resources. The server verifies the
              token to ensure the client has the necessary permissions.
              <br /> <br />
              <p className="font-bold underline text-red-800">
                Access token expiration:
              </p>{" "}
              <br />
              The access token has an expiration time. Once it expires, the
              client must obtain a new access token using the refresh token.
              <br />
              <p className="font-bold underline text-red-800">
                Refreshing the access token:
              </p>
              <br /> The client sends a request to the authentication server
              with the refresh token. If the refresh token is valid and not
              expired, the server issues a new access token, and sometimes a new
              refresh token as well. This process allows the client to continue
              accessing protected resources without requiring the user to
              re-authenticate.
              <br /> <br />
            </div>
            <p className="font-bold underline text-red-800">
              Access token storage:
            </p>
            <br />
            Access tokens are short-lived and should be stored securely,
            preferably in memory, for the duration of their validity. Storing
            them in memory helps reduce the risk of exposure and unauthorized
            access.
            <br /> <br />
            <p className="font-bold underline text-red-800">
              Refresh token storage:
            </p>
            <br />
            Refresh tokens are long-lived and should be stored securely. The
            recommended approach is to store them in a secure HTTP-only cookie
            or in a secure storage mechanism provided by the platform, such as
            the Keychain on iOS or the Android Keystore on Android. This helps
            protect them from cross-site scripting (XSS) attacks. <br /> <br />{" "}
            --------------------
            <strong className="font-bold text-lg text-red-800"></strong>
          </p>
        </section>

        {/* 


 */}

        <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
          <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
            Compare between SQL and NoSQL databases{" "}
          </h1>

          <p className="text-justify  md:text-center text-cyan-800 font-medium mb-7 pb-10 p-5">
            SQL and NoSQL databases are two distinct types of database
            management systems that differ in their data models, query
            languages, scalability, and use cases.
            <br />
            Here is a comparison between SQL and NoSQL databases:
            <h1 className="font-bold text-xl text-center mb-5 p-5 pt-5 mt-4 text-red-800">
              Data Model:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 ">
              <div className="text-left bg-green-200 p-5 rounded-xl shadow-xl">
                <span className=" text-xl font-bold text-red-800">
                  {" "}
                  Data Model SQL:{" "}
                </span>
                <br />
                SQL databases, also known as relational databases, use a
                structured data model based on tables with predefined schemas,
                where data is organized into rows and columns. Relationships
                between tables are established using foreign keys.
              </div>
              <div className="text-right  bg-green-200 p-5">
                <span className=" text-xl font-bold text-red-800">
                  {" "}
                  Data Model NoSQL:{" "}
                </span>
                <br /> NoSQL databases employ a flexible and schema-less data
                model. They can store various data formats, including key-value
                pairs, documents, wide-column stores, and graph structures.
                NoSQL databases are designed for handling unstructured or
                semi-structured data.
              </div>
            </div>
            <br />
            <br />
            {/* 


 */}
            <h1 className="font-bold text-xl text-center mb-5 p-5 pt-5 text-red-800">
              Query Language:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 ">
              <div className="text-left bg-green-200 p-5 rounded-xl shadow-xl">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Query Language SQL:{" "}
                </span>
                <br />
                SQL databases use the Structured Query Language (SQL) for
                defining and manipulating data. SQL provides a standardized and
                powerful language for querying and managing relational
                databases, with support for complex operations like joins,
                aggregations, and transactions.
              </div>
              <div className="text-right  bg-green-200 p-5">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Query Language NoSQL:{" "}
                </span>
                <br /> NoSQL databases are designed for horizontal scalability
                from the start. They can distribute data across multiple servers
                or clusters, providing high scalability and performance. NoSQL
                databases excel in handling large amounts of data and high
                traffic loads.
              </div>
            </div>
            {/* 



 */}
            <h1 className="font-bold text-xl text-center mb-5 p-5 pt-5 mt-4 text-red-800">
              Scalability:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 ">
              <div className="text-left bg-green-200 p-5 rounded-xl shadow-xl">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Scalability SQL:{" "}
                </span>
                <br />
                SQL databases traditionally scale vertically by upgrading
                hardware resources like CPU, RAM, and storage capacity. However,
                modern SQL databases also support horizontal scalability through
                techniques like sharding, replication, and clustering.
              </div>
              <div className="text-right  bg-green-200 p-5">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Scalability NoSQL:{" "}
                </span>
                <br /> NoSQL databases are designed for horizontal scalability
                from the start. They can distribute data across multiple servers
                or clusters, providing high scalability and performance. NoSQL
                databases excel in handling large amounts of data and high
                traffic loads.
              </div>
            </div>
            {/* 



 */}
            <h1 className="font-bold text-xl text-center mb-5 p-5 pt-5 mt-4 text-red-800">
              Data Consistency:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 ">
              <div className="text-left bg-green-200 p-5 rounded-xl shadow-xl">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Data Consistency SQL:{" "}
                </span>
                <br />
                SQL databases typically prioritize data consistency and ACID
                (Atomicity, Consistency, Isolation, Durability) properties. ACID
                transactions ensure that database operations are executed
                reliably and maintain data integrity.
              </div>
              <div className="text-right  bg-green-200 p-5">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Data Consistency NoSQL:{" "}
                </span>
                <br /> NoSQL databases often relax consistency in favor of high
                availability and scalability. They may prioritize eventual
                consistency, where data changes propagate to all replicas over
                time. NoSQL databases provide BASE (Basically Available, Soft
                state, Eventual consistency) properties, which focus on
                availability and partition tolerance.
              </div>
            </div>
            {/* 


 */}
            <h1 className="font-bold text-xl text-center mb-5 p-5 pt-5 mt-4 text-red-800">
              Use Cases:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 ">
              <div className="text-left bg-green-200 p-5 rounded-xl shadow-xl">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Use Cases SQL:{" "}
                </span>
                <br />
                SQL databases are well-suited for applications that require
                complex querying, data integrity, and structured relationships.
                They are commonly used in transactional systems, financial
                applications, content management systems, and applications with
                well-defined schemas.
              </div>
              <div className="text-right  bg-green-200 p-5">
                <span className="text-xl font-bold text-red-800">
                  {" "}
                  Use Cases NoSQL:{" "}
                </span>
                <br /> NoSQL databases are suitable for handling unstructured or
                rapidly evolving data. They are often used in real-time
                analytics, content-driven applications, IoT (Internet of Things)
                systems, social networks, and applications that require flexible
                and scalable data storage.
              </div>
            </div>
            --------------------
            <strong className="font-bold text-lg text-red-800"></strong>
          </p>
        </section>

        {/* 


 */}

        {/* What is express js? What is Nest JS ? */}

        {/* 


 */}

        {/* What is MongoDB aggregate and how does it work */}

        {/* 


 */}
        <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
          <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
            ...Thanks for having patience... <br /> ...while reading my Answers
            of the particular Questions...
          </h1>

          <h1 className="font-bold text-2xl text-center text-[#dd171e] mb-5 p-5 pt-5 mt-4">
            N.B. : ----- All the answers were written by me and modified by
            me... But few lines were inspired from Google...
          </h1>
        </section>

        {/* 


 */}
      </main>
    </>
  );
};

export default Blog;
