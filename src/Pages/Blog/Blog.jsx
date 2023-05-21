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

        {/* Compare SQL and NoSQL databases */}

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
