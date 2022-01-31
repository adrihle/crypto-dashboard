#### Table of contents

1. [Tech stack](#1-stack)
2. [Architecture](#2-architecture)
3. [Next Steps](#3-next-steps)

---

# 1. Stack

In order to build the sample, here was used the following stack:

-React (CRA)

# 2. Architecture

This sample was planned to work as standalone following [CDD](https://www.componentdriven.org/).

The page was built following the concept of DDD but applied to front where:

-The hooks work as service layer, connecting the local state and external services (API´s mocked), and provide the service logic served to components/containers

-Context/Provider will act as domain layer, where we update the local state based of Redux pattern

-Page/Containers/Component this was planned to keep as simple as posible, abstracting the logic to hooks and limitting the indexes between them

# 3. Next Steps

The followings steps its optimize and testing the code using RTL & Jest, adding animations to CTA´s and on render components
